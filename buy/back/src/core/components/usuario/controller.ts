import { Request, Response } from "express";
import * as util from 'util';

import { getRepository } from './../../../config/db/data-source';

import { Usuario } from "./entity";
import { UsuarioRepository } from './repository';





export class UsuarioController {


    static async new(req: Request, res: Response) {

        const { email, password, name } = req.body;

        const repository = new UsuarioRepository(getRepository(Usuario))

        const usuario = new Usuario(email, password, name);

        repository.create(usuario)
        res.set('Access-Control-Allow-Origin', '*');

        return res
            .status(200)
            .json({ message: "User created successfully", usuario });
    }

    static async getAll(req: Request, res: Response) {

        const repository = new UsuarioRepository(getRepository(Usuario))

        const entity = await repository.findAll()
        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json(entity)
    }

}