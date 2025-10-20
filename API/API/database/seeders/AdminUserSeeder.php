<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        $userId = DB::table('users')->insertGetId([
            'name' => 'Admin User',
            'email' => 'admin@buyhelp.com',
            'password' => Hash::make('admin123'),
            'system_reserve' => 1,
            'status' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Assign admin role (role_id = 1)
        DB::table('model_has_roles')->insert([
            'role_id' => 1, // admin role
            'model_type' => 'App\Models\User',
            'model_id' => $userId,
        ]);

        $this->command->info("Admin user created successfully!");
        $this->command->info("Email: admin@buyhelp.com");
        $this->command->info("Password: admin123");
        $this->command->info("User ID: {$userId}");
    }
}
