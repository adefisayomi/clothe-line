import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: any) => Rule.required().min(0),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'sizes',
        title: 'Available Sizes',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            },
          },
        ],
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray", "indigo", "violet", "turquoise", "maroon", "cyan", "magenta", "olive", "gold", "silver", "beige", "lavender", "teal", "peach", "coral", "tan", "salmon", "sky blue", "mauve", "charcoal", "burgundy", "slate", "mint green", "forest green", "ruby", "plum", "mustard", "turmeric", "chartreuse", "orchid", "khaki", "periwinkle", "aqua", "ivory", "tangerine", "apricot", "sienna", "brick red", "cornflower blue", "lemon yellow"
              , 'other']
            },
          },
        ],
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: (doc) => `${doc.name}-${doc._id}`,
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
        },
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'images.0',
      },
    },
  });
  

  export type ProductTypes = {
    _id: string;
    name?: string;
    description?: string;
    price?: number;
    colors?: string[];
    sizes?: string[];
    images?: any[];
    slug?: {
      current: string;
    };
  };

  export type ProductInCartTypes = {
    _id: string;
    name?: string;
    description?: string;
    price?: number;
    color?: string;
    size?: string;
    image?: string;
    slug?: string;
    quantity?: number;
    note?: string;
  };