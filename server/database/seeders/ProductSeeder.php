<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $res = Http::get(config('services.dummyjson.products'));
        $products = $res->json()['products'];

        $categoryMap = Category::pluck('id', 'slug');

        foreach ($products as $product) {
            Product::create([
                'category_id' => $categoryMap[$product['category']],
                'title' => $product['title'],
                'description' => $product['description'],
                'price' => $product['price'],
                'discount' => $product['discountPercentage'],
                'rating' => $product['rating'],
                'stock' => $product['stock'],
                'brand' => $product['brand'] ?? null,
            ]);
        }
    }
}
