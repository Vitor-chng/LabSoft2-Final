import { Request, Response } from "express";
import * as util from 'util';

import { getRepository } from './../../../config/db/data-source';

import { Ingresso } from "./entity";
import { IngressoRepository } from './repository';





export class IngressoController {


    static async create(req: Request, res: Response) {

        const { email, assento } = req.body;

        const repository = new IngressoRepository(getRepository(Ingresso))

        const ingresso = new Ingresso(email, assento);

        repository.create(ingresso)
        res.set('Access-Control-Allow-Origin', '*');

        return res
            .status(200)
            .json({ message: "User created successfully", ingresso });
    }


    static async getAll(req: Request, res: Response) {

        const repository = new IngressoRepository(getRepository(Ingresso))

        const entity = await repository.findAll()
        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json(entity)
    }

}