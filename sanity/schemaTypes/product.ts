import { defineType} from 'sanity'

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
              list: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray", "indigo", "violet", "turquoise", "maroon", "cyan", "magenta", "olive", "gold", "silver", "beige", "lavender", "teal", "peach", "coral", "tan", "salmon", "sky blue", "mauve", "charcoal", "burgundy", "slate", "mint green", "forest green", "ruby", "plum", "mustard", "turmeric", "chartreuse", "orchid", "khaki", "periwinkle", "aqua", "ivory", "tangerine", "apricot", "sienna", "brick red", "cornflower blue", "lemon yellow"]

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
      {
        name: 'categoryType',
        title: 'Category Type',
        type: 'string',
        options: {
          list: [
            { title: 'Men', value: 'men' },
            { title: 'New In', value: 'new-in' },
            { title: 'Women', value: 'women' },
            { title: 'Kids', value: 'kids' },
            { title: 'Embroidery', value: 'embroidery' },
            { title: 'Special Items', value: 'special-items' },
          ],
          layout: 'radio', // Display as radio buttons
        },
        description: 'The type of category.',
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
    category?: string;
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
    category?: string;
    image?: string;
    slug?: string;
    quantity?: number;
    note?: string;
  };

  export const ColorList = [
    { "title": "red", "value": "#FF0000" },
    { "title": "blue", "value": "#0000FF" },
    { "title": "green", "value": "#00FF00" },
    { "title": "yellow", "value": "#FFFF00" },
    { "title": "orange", "value": "#FFA500" },
    { "title": "purple", "value": "#800080" },
    { "title": "pink", "value": "#FFC0CB" },
    { "title": "brown", "value": "#A52A2A" },
    { "title": "black", "value": "#000000" },
    { "title": "white", "value": "#FFFFFF" },
    { "title": "gray", "value": "#808080" },
    { "title": "indigo", "value": "#4B0082" },
    { "title": "violet", "value": "#EE82EE" },
    { "title": "turquoise", "value": "#40E0D0" },
    { "title": "maroon", "value": "#800000" },
    { "title": "cyan", "value": "#00FFFF" },
    { "title": "magenta", "value": "#FF00FF" },
    { "title": "olive", "value": "#808000" },
    { "title": "gold", "value": "#FFD700" },
    { "title": "silver", "value": "#C0C0C0" },
    { "title": "beige", "value": "#F5F5DC" },
    { "title": "lavender", "value": "#E6E6FA" },
    { "title": "teal", "value": "#008080" },
    { "title": "peach", "value": "#FFE5B4" },
    { "title": "coral", "value": "#FF7F50" },
    { "title": "tan", "value": "#D2B48C" },
    { "title": "salmon", "value": "#FA8072" },
    { "title": "sky blue", "value": "#87CEEB" },
    { "title": "mauve", "value": "#9370DB" },
    { "title": "charcoal", "value": "#36454F" },
    { "title": "burgundy", "value": "#800020" },
    { "title": "slate", "value": "#708090" },
    { "title": "mint green", "value": "#98FF98" },
    { "title": "forest green", "value": "#228B22" },
    { "title": "ruby", "value": "#E0115F" },
    { "title": "plum", "value": "#DDA0DD" },
    { "title": "mustard", "value": "#FFDB58" },
    { "title": "turmeric", "value": "#FFC40C" },
    { "title": "chartreuse", "value": "#7FFF00" },
    { "title": "orchid", "value": "#DA70D6" },
    { "title": "khaki", "value": "#C3B091" },
    { "title": "periwinkle", "value": "#CCCCFF" },
    { "title": "aqua", "value": "#00FFFF" },
    { "title": "ivory", "value": "#FFFFF0" },
    { "title": "tangerine", "value": "#F28500" },
    { "title": "apricot", "value": "#FDD5B1" },
    { "title": "sienna", "value": "#A0522D" },
    { "title": "brick red", "value": "#CB4154" },
    { "title": "cornflower blue", "value": "#6495ED" },
    { "title": "lemon yellow", "value": "#FFFF9F" }
  ];