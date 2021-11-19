import axios from "axios";

const instance = axios.create({
    timeout: 1000,
});

const resquestGET = (url: string)=> {
    return instance.get(url).then((Response) => Response);
};

const requestPost = (url: string, data:any) => {
    return instance.post(url, data).then((Response) => Response);
};

const requestDelete = (url:string) => {
    return instance.delete(url).then((Response) => Response);
};

const requestPatch =  (url:string, data:any) => {
    return instance.patch(url, data).then((Response) => Response);
}

export { resquestGET, requestPost,requestDelete, requestPatch };
