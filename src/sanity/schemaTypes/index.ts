import { product } from './product'
import { Category } from './category'
import {Order} from './order'
import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    Category,
    Order
  ],
}
