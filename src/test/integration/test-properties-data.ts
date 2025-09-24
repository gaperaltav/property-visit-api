import { Property, PropertyCategories } from "@src/types";
import mongoose from "mongoose";


export const testProperties: Property[] = [
    {
        title: "test1",
        category: PropertyCategories.House,
        address: "test address 1",
        user: new mongoose.Types.ObjectId(),
        created_date: new Date()
    },
    {
        title: "test2",
        category: PropertyCategories.Apartment,
        address: "test address 2",
        user: new mongoose.Types.ObjectId(),
        created_date: new Date()
    },
]

