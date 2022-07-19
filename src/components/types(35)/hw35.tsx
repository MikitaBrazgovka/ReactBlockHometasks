// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

import { type } from "@testing-library/user-event/dist/type";

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type UsersType = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}[];

interface User {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
} // как прописать через интерфейс чтобы сразу тип был как массив с объектами определенного типа ?

export const users: UsersType = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

///// 1

function stringNames(arr: User[]): string {
  const newArr = arr.map((el) => el.name);

  return String(newArr);
}

stringNames(users);

///// 2

const countCars = (arr: User[]): number => {
  let counter = 0;

  arr.forEach((el) => {
    el.cars ? (counter += el.cars.length) : null;
  });

  return counter;
};

countCars(users);
