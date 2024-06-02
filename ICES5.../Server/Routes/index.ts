import express from 'express';
const router = express.Router();

import { DisplayMovieList, DisplayMovieById, AddMovie, UpdateMovie, DeleteMovie } from '../Controllers/movie';


router.get('/', (req, res, next) => {  DisplayMovieList(req, res, next); });

router.get('/:id', (req, res, next) => {  DisplayMovieById(req, res, next); });

router.post('/add', (req, res, next) => {  AddMovie(req, res, next); });

router.put('/update/:id', (req, res, next) => {  UpdateMovie(req, res, next); });

router.delete('/delete/:id', (req, res, next) => {  DeleteMovie(req, res, next); });

export default router;
