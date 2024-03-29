import { Host } from "./ApiEndpoints"

const fileDownload = (img) => {
    return  `${Host.BACKEND}${Host.PREFIX}/file/get-single-image/${img}/download`
}
  

const fileView = (img) => {
    return  `${Host.BACKEND}${Host.PREFIX}/file/get-single-image/${img}/view`
}

const extractDesk = (desk , length) => {
    if(desk.length > length){
         return desk.substr(0 , length)  + "..." 
    }else {
        return desk 
    }
}


export { fileView , fileDownload , extractDesk}  