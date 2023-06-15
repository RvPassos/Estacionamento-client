import axios, { AxiosInstance } from "axios";

import { Marca } from "@/model/marca";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class MarcaClient {
    
    private axiosClient : AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca : Marca) : Promise<void> {
        try {
            return (await this.axiosClient.post('/', marca))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(marca : Marca) : Promise<void> {
        try {
            return (await this.axiosClient.post(`/${marca.id}`, marca)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(marca : Marca) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/${marca.id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Marca>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Marca>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }
}