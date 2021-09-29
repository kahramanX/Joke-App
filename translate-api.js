class TranslateApi{
    // Using yandex translate API
    constructor(englishText){
        this.baseUrl=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210929T092515Z.b198b0b39cf9f0ae.e49acfa0ca099ae922d25ff8c79b9fa08b456abe&text=${englishText}&lang=tr`
        this.translateApi = axios.create({
            baseURL : this.baseUrl,
        });
    }

   async getTranslateApi(){
       let translateObject = await this.translateApi.post();
        console.log(translateObject.data.text.toString());
        return translateObject.data.text.toString();
    }
}

export function getTranslate(text){
    const translated = new TranslateApi(text).getTranslateApi();

    return translated;
}