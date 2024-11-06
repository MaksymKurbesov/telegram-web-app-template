import { create } from "zustand";
import { userService } from "../main.tsx";
import { generateUserData } from "../helpers/helpers.ts";
import { onSnapshot, doc } from "firebase/firestore";

const useUserStore = create((set) => ({
  currentUser: {},
  fetchUser: async (tgUser) => {
    // Получаем ссылку на документ пользователя в Firestore
    const userDocRef = doc(userService.collectionRef, String(tgUser.id));

    // Устанавливаем слушателя onSnapshot для отслеживания изменений в Firestore
    onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        // Если документ существует, обновляем состояние текущего пользователя
        set({ currentUser: docSnapshot.data() });
      } else {
        // Если документа нет, создаем новые данные пользователя
        const userData = generateUserData(tgUser);
        userService.addUser(userData).then(() => {
          set({ currentUser: userData });
        });
      }
    });
  },
}));

export default useUserStore;
