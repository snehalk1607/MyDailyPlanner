/**
 * fileName: tasks.services.ts
 * description: This file has all services for API calls to manage transactions
 */

import {  FIREBASE_DB_COLLECTION, FIREBASE_DB_URL } from "../../app.constants";
import { firebase } from '@react-native-firebase/database';
import { FireBaseResponse, Task } from "./task.types";

/**
 * @export
 * @class TaskServices
 * @description It constitutes of a list fetch, create, update and delete services
 */
export class TaskServices {
    private static readonly DB_URL = FIREBASE_DB_URL;   
    private static readonly DB_COLLECTION = FIREBASE_DB_COLLECTION; 
    public static readonly DB_INIT = firebase.app().database(this.DB_URL);

   public static async fetchData(): Promise<FireBaseResponse> {
        try {
          const snapshot = await TaskServices.DB_INIT.ref(this.DB_COLLECTION).once('value');
          return snapshot.val();
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }

      public  static async addTask(payload: Task): Promise<void> {
        try {
           await TaskServices.DB_INIT.ref(`${this.DB_COLLECTION}/task${payload.id}`).set(payload);
            console.log('added');
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }

      public  static async updateTask(payload: Task): Promise<void> {
        try {
            await TaskServices.DB_INIT.ref(`${this.DB_COLLECTION}/task${payload.id}`)
            .update(payload)
            .then(() => console.log('Data updated.'));
            console.log('added');
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }

      public  static async updateCompletionOfTask(payload: Pick<Task, 'id' | 'isComplete'>): Promise<void> {
        try {
            await TaskServices.DB_INIT.ref(`${this.DB_COLLECTION}/task${payload.id}`)
            .update({isComplete : !payload.isComplete})
            .then(() => console.log('Data updated.'));
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }



      public  static async deleteTask(id: number): Promise<void> {
        try {
            await TaskServices.DB_INIT.ref(`${this.DB_COLLECTION}/task${id}`)
            .remove()
            .then(() => console.log('Data removed.'));
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }
}