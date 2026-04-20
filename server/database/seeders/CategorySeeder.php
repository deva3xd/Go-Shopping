<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $res = Http::get(config('services.dummyjson.categories'));
        $categories = $res->json();

        foreach ($categories as $category) {
            Category::create([
                'slug' => $category['slug'],
                'name' => $category['name'],
                'url' => $category['url'],
            ]);
        }
    }
}
