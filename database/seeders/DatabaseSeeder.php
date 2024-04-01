<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('users')->insert([
            'name' => 'Test',
            'email' => 'akmeninis@gmail.com',
            'password' => Hash::make('123'),
        ]);

        DB::table('categories')->insert([
            'name' => 'Kategorija 1',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
            'priority' => 1,
            'featured_image_id' => 1
        ]);

        DB::table('categories')->insert([
            'name' => 'Kategorija 2',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
            'priority' => 2,
            'featured_image_id' => 2
        ]);

        DB::table('categories')->insert([
            'name' => 'Kategorija 3',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
            'priority' => 3,
            'featured_image_id' => 3
        ]);

        DB::table('categories')->insert([
            'name' => 'Kategorija 4',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
            'priority' => 4,
            'featured_image_id' => 4
        ]);

        DB::table('categories')->insert([
            'name' => 'Kategorija 5',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
            'priority' => 5,
            'featured_image_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Kategorija 6',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
            'priority' => 6,
            'featured_image_id' => 6
        ]);

        DB::table('descriptions')->insert([
            'description' => 'Assumenda quisquam illo officia voluptatum sit, quae exercitationem esse fugiat magni praesentium. Ex vero dolores, fuga ratione culpa. Temporibus harum fugit rem aliquid facere sit dolore saepe. Quod eaque ad quisquam amet inventore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        ]);

        DB::table('questions')->insert([
            'question' => 'Question 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, itaque. Quam, tenetur?',
            'answer' => 'Answer 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi voluptatem corrupti consectetur rerum! Repudiandae laborum sed iure. Cruc',
            'priority' => 1
        ]);

        DB::table('questions')->insert([
            'question' => 'Question 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, itaque. Quam, tenetur?',
            'answer' => 'Answer 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi voluptatem corrupti consectetur rerum! Repudiandae laborum sed iure. Cruc',
            'priority' => 2
        ]);

        DB::table('questions')->insert([
            'question' => 'Question 3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, itaque. Quam, tenetur?',
            'answer' => 'Answer 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi voluptatem corrupti consectetur rerum! Repudiandae laborum sed iure. Cruc',
            'priority' => 3
        ]);

        DB::table('questions')->insert([
            'question' => 'Question 4: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, itaque. Quam, tenetur?',
            'answer' => 'Answer 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi voluptatem corrupti consectetur rerum! Repudiandae laborum sed iure. Cruc',
            'priority' => 4
        ]);

        DB::table('contacts')->insert([
            'phone' => '+370 000 000',
            'email' => 'info@akmeninis',
            'address' => 'Lorem ipsum dolor sit amet.',
            'worktime' => 'Darbo dienomis: 09:00 - 18:00'
        ]);

        DB::table('heroes')->insert([
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!',
        ]);
    }
}
