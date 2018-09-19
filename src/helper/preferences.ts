import { NativeStorage } from '@ionic-native/native-storage';
import { Injectable } from '@angular/core';


@Injectable()
export class SharedPreferences {

    constructor(private nativeStorage: NativeStorage) {

    }
    saveData(key, value) {
        this.nativeStorage.setItem(key, value)
            .then(
                () => console.log('Stored item!'),
                error => console.error('Error storing item', error)
            );
    }
    getData(key):any {
        return new Promise((resolve) => {
            this.nativeStorage.getItem(key)
                .then(
                    data => resolve(data),
                    error => resolve("")
                );
        })
    }
}