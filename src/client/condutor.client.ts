import axios, { AxiosInstance } from "axios";

import { Condutor } from "@/model/condutor";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class CondutorCliente {

    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/estacionamento',
            headers: {'Content-type' : 'application/json'}
        });
    }

    
}