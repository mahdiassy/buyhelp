<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Store;
use App\Models\Tag;
use App\Models\Attribute;
use App\Models\AttributeValue;
use App\Models\Blog;
use App\Models\Faq;
use App\Models\Page;
use App\Models\Tax;
use App\Models\Coupon;
use App\Models\Country;
use App\Models\Currency;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Address;
use App\Models\Cart;
use App\Models\Wishlist;
use App\Models\Review;
use App\Models\Notice;
use App\Models\Menu;
use App\Models\Shipping;
use App\Models\ShippingRule;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Faker\Factory as Faker;

class ComprehensiveDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        
        // Create Admin User if doesn't exist
        if (User::count() == 0) {
            $adminRole = Role::where('name', 'admin')->first();
            if (!$adminRole) {
                $adminRole = Role::create(['name' => 'admin']);
            }
            
            $admin = User::create([
                'name' => 'Admin User',
                'email' => 'admin@buyhelp.com',
                'password' => Hash::make('password123'),
                'country_code' => '1',
                'phone' => '1234567890',
                'system_reserve' => true,
                'email_verified_at' => now(),
                'status' => true,
            ]);
            
            $admin->assignRole('admin');
        }

        // Create regular users
        $countries = Country::limit(10)->get();
        for ($i = 0; $i < 20; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password123'),
                'country_code' => '1',
                'phone' => $faker->phoneNumber,
                'country_id' => $countries->random()->id,
                'status' => true,
                'email_verified_at' => now(),
            ]);
        }

        // Create Categories
        $categories = [
            ['name' => 'Electronics', 'slug' => 'electronics', 'description' => 'Electronic devices and gadgets'],
            ['name' => 'Clothing', 'slug' => 'clothing', 'description' => 'Fashion and apparel'],
            ['name' => 'Home & Garden', 'slug' => 'home-garden', 'description' => 'Home improvement and gardening'],
            ['name' => 'Sports', 'slug' => 'sports', 'description' => 'Sports equipment and accessories'],
            ['name' => 'Books', 'slug' => 'books', 'description' => 'Books and literature'],
            ['name' => 'Toys', 'slug' => 'toys', 'description' => 'Toys and games for all ages'],
            ['name' => 'Health & Beauty', 'slug' => 'health-beauty', 'description' => 'Health and beauty products'],
            ['name' => 'Automotive', 'slug' => 'automotive', 'description' => 'Car parts and accessories'],
        ];

        foreach ($categories as $index => $categoryData) {
            Category::create([
                'name' => $categoryData['name'],
                'slug' => $categoryData['slug'],
                'description' => $categoryData['description'],
                'status' => true,
                'sort' => $index + 1,
                'commission_rate' => rand(5, 15),
                'category_icon_id' => null,
                'category_image_id' => null,
            ]);
        }

        // Create parent categories with children
        $parentCategory = Category::create([
            'name' => 'Fashion',
            'slug' => 'fashion',
            'description' => 'Fashion and style items',
            'status' => true,
            'sort' => 10,
            'commission_rate' => 10,
        ]);

        Category::create([
            'name' => 'Men\'s Fashion',
            'slug' => 'mens-fashion',
            'description' => 'Fashion for men',
            'parent_id' => $parentCategory->id,
            'status' => true,
            'sort' => 1,
            'commission_rate' => 10,
        ]);

        Category::create([
            'name' => 'Women\'s Fashion',
            'slug' => 'womens-fashion',
            'description' => 'Fashion for women',
            'parent_id' => $parentCategory->id,
            'status' => true,
            'sort' => 2,
            'commission_rate' => 10,
        ]);

        // Create Brands
        $brands = [
            'Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG', 'Microsoft', 'Google',
            'Amazon', 'Dell', 'HP', 'Canon', 'Nikon', 'Zara', 'H&M', 'Uniqlo'
        ];

        foreach ($brands as $index => $brandName) {
            Brand::create([
                'name' => $brandName,
                'slug' => strtolower(str_replace(' ', '-', $brandName)),
                'description' => "Premium {$brandName} products",
                'status' => true,
                'sort' => $index + 1,
                'brand_image_id' => null,
                'brand_banner_id' => null,
            ]);
        }

        // Create Tags
        $tags = ['new', 'sale', 'featured', 'trending', 'bestseller', 'limited', 'premium', 'eco-friendly'];
        foreach ($tags as $index => $tagName) {
            Tag::create([
                'name' => ucfirst($tagName),
                'slug' => $tagName,
                'description' => "Products tagged as {$tagName}",
                'status' => true,
                'sort' => $index + 1,
            ]);
        }

        // Create Attributes
        $attributes = [
            ['name' => 'Color', 'slug' => 'color', 'style' => 'color'],
            ['name' => 'Size', 'slug' => 'size', 'style' => 'dropdown'],
            ['name' => 'Material', 'slug' => 'material', 'style' => 'dropdown'],
            ['name' => 'Brand', 'slug' => 'brand', 'style' => 'dropdown'],
        ];

        foreach ($attributes as $index => $attrData) {
            $attribute = Attribute::create([
                'name' => $attrData['name'],
                'slug' => $attrData['slug'],
                'style' => $attrData['style'],
                'status' => true,
                'sort' => $index + 1,
            ]);

            // Create attribute values
            if ($attrData['slug'] == 'color') {
                $colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Purple'];
                foreach ($colors as $i => $color) {
                    AttributeValue::create([
                        'attribute_id' => $attribute->id,
                        'value' => $color,
                        'slug' => strtolower($color),
                        'hex_color' => $color == 'Red' ? '#FF0000' : ($color == 'Blue' ? '#0000FF' : '#000000'),
                        'sort' => $i + 1,
                    ]);
                }
            } elseif ($attrData['slug'] == 'size') {
                $sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
                foreach ($sizes as $i => $size) {
                    AttributeValue::create([
                        'attribute_id' => $attribute->id,
                        'value' => $size,
                        'slug' => strtolower($size),
                        'sort' => $i + 1,
                    ]);
                }
            }
        }

        // Create Stores
        $users = User::where('email', '!=', 'admin@buyhelp.com')->limit(5)->get();
        foreach ($users as $user) {
            Store::create([
                'store_name' => $faker->company . ' Store',
                'description' => $faker->text(200),
                'store_address' => $faker->address,
                'country_id' => $countries->random()->id,
                'state_id' => 1,
                'city' => $faker->city,
                'address' => $faker->streetAddress,
                'pincode' => $faker->postcode,
                'vendor_id' => $user->id,
                'status' => true,
                'is_approved' => true,
                'store_logo_id' => null,
                'store_cover_id' => null,
            ]);
        }

        // Create Products
        $categories = Category::all();
        $brands = Brand::all();
        $stores = Store::all();
        $tags = Tag::all();

        for ($i = 0; $i < 50; $i++) {
            $category = $categories->random();
            $brand = $brands->random();
            $store = $stores->random();
            
            $product = Product::create([
                'name' => $faker->words(3, true) . ' Product',
                'slug' => $faker->slug . '-' . $i,
                'short_description' => $faker->sentence(10),
                'description' => $faker->paragraph(5),
                'type' => 'simple',
                'unit' => 'piece',
                'weight' => $faker->randomFloat(2, 0.1, 10),
                'dimensions' => json_encode(['length' => 10, 'width' => 5, 'height' => 3]),
                'sku' => 'SKU-' . strtoupper($faker->bothify('??##??')),
                'price' => $faker->randomFloat(2, 10, 1000),
                'sale_price' => $faker->randomFloat(2, 5, 500),
                'discount' => rand(5, 50),
                'quantity' => rand(10, 100),
                'stock_status' => 'in_stock',
                'meta_title' => $faker->sentence(5),
                'meta_description' => $faker->sentence(10),
                'product_thumbnail_id' => null,
                'product_galleries_id' => null,
                'size_chart_image_id' => null,
                'estimated_delivery_text' => '3-5 business days',
                'return_policy_text' => '30 days return policy',
                'safe_checkout' => true,
                'secure_checkout' => true,
                'social_share' => true,
                'encourage_order' => true,
                'encourage_view' => true,
                'status' => true,
                'is_approved' => true,
                'is_featured' => rand(0, 1),
                'is_trending' => rand(0, 1),
                'is_return' => true,
                'is_trending' => rand(0, 1),
                'is_free_shipping' => rand(0, 1),
                'is_sale_enable' => rand(0, 1),
                'sale_starts_at' => now(),
                'sale_expired_at' => now()->addDays(30),
                'shipping_days' => rand(1, 7),
                'is_external' => false,
                'external_url' => null,
                'external_button_text' => null,
                'store_id' => $store->id,
                'created_by_id' => $store->vendor_id,
                'tax_id' => null,
                'categories' => [$category->id],
                'tags' => [$tags->random()->id],
                'brand_id' => $brand->id,
                'sort' => $i + 1,
            ]);

            // Add product to categories
            $product->categories()->sync([$category->id]);
            $product->tags()->sync([$tags->random()->id]);
        }

        // Create Blogs
        for ($i = 0; $i < 10; $i++) {
            Blog::create([
                'title' => $faker->sentence(6),
                'slug' => $faker->slug . '-blog-' . $i,
                'description' => $faker->paragraph(3),
                'content' => $faker->paragraphs(5, true),
                'meta_title' => $faker->sentence(5),
                'meta_description' => $faker->sentence(10),
                'blog_thumbnail_id' => null,
                'blog_meta_image_id' => null,
                'status' => true,
                'is_featured' => rand(0, 1),
                'is_sticky' => rand(0, 1),
                'created_by_id' => 1,
            ]);
        }

        // Create FAQs
        $faqs = [
            ['question' => 'How do I place an order?', 'answer' => 'You can place an order by browsing our products and clicking "Add to Cart".'],
            ['question' => 'What payment methods do you accept?', 'answer' => 'We accept credit cards, PayPal, and bank transfers.'],
            ['question' => 'How long does shipping take?', 'answer' => 'Shipping typically takes 3-5 business days.'],
            ['question' => 'Can I return my order?', 'answer' => 'Yes, we have a 30-day return policy for most items.'],
            ['question' => 'Do you offer international shipping?', 'answer' => 'Yes, we ship to most countries worldwide.'],
        ];

        foreach ($faqs as $index => $faqData) {
            Faq::create([
                'question' => $faqData['question'],
                'answer' => $faqData['answer'],
                'status' => true,
                'sort' => $index + 1,
            ]);
        }

        // Create Pages
        $pages = [
            ['title' => 'About Us', 'slug' => 'about-us', 'content' => 'Learn more about our company and mission.'],
            ['title' => 'Privacy Policy', 'slug' => 'privacy-policy', 'content' => 'Our privacy policy and data protection guidelines.'],
            ['title' => 'Terms of Service', 'slug' => 'terms-of-service', 'content' => 'Terms and conditions for using our service.'],
            ['title' => 'Contact Us', 'slug' => 'contact-us', 'content' => 'Get in touch with our customer service team.'],
        ];

        foreach ($pages as $index => $pageData) {
            Page::create([
                'title' => $pageData['title'],
                'slug' => $pageData['slug'],
                'content' => $pageData['content'],
                'meta_title' => $pageData['title'],
                'meta_description' => $pageData['content'],
                'status' => true,
                'sort' => $index + 1,
            ]);
        }

        // Create Taxes
        Tax::create([
            'name' => 'VAT',
            'rate' => 10.00,
            'status' => true,
        ]);

        Tax::create([
            'name' => 'Sales Tax',
            'rate' => 8.50,
            'status' => true,
        ]);

        // Create Coupons
        for ($i = 0; $i < 5; $i++) {
            Coupon::create([
                'title' => 'SAVE' . ($i + 1) * 10,
                'code' => 'SAVE' . ($i + 1) * 10,
                'description' => 'Save ' . ($i + 1) * 10 . '% on your order',
                'type' => 'percentage',
                'amount' => ($i + 1) * 10,
                'minimum_amount' => 50,
                'usage_per_coupon' => 100,
                'usage_per_customer' => 5,
                'start_date' => now(),
                'end_date' => now()->addDays(30),
                'status' => true,
                'is_apply_all' => true,
            ]);
        }

        // Create Shipping methods
        Shipping::create([
            'name' => 'Standard Shipping',
            'price' => 5.99,
            'status' => true,
        ]);

        Shipping::create([
            'name' => 'Express Shipping',
            'price' => 15.99,
            'status' => true,
        ]);

        Shipping::create([
            'name' => 'Free Shipping',
            'price' => 0.00,
            'status' => true,
        ]);

        // Create Menu items
        $menus = [
            ['title' => 'Home', 'path' => '/', 'type' => 'custom'],
            ['title' => 'Shop', 'path' => '/shop', 'type' => 'custom'],
            ['title' => 'Categories', 'path' => '/categories', 'type' => 'custom'],
            ['title' => 'About', 'path' => '/about', 'type' => 'custom'],
            ['title' => 'Contact', 'path' => '/contact', 'type' => 'custom'],
        ];

        foreach ($menus as $index => $menuData) {
            Menu::create([
                'title' => $menuData['title'],
                'path' => $menuData['path'],
                'type' => $menuData['type'],
                'sort' => $index + 1,
                'status' => true,
                'mega_menu' => false,
                'badge_text' => null,
                'badge_color' => null,
                'is_target_blank' => false,
            ]);
        }

        // Create some addresses for users
        $users = User::limit(10)->get();
        foreach ($users as $user) {
            Address::create([
                'title' => 'Home',
                'type' => 'home',
                'user_id' => $user->id,
                'street' => $faker->streetAddress,
                'city' => $faker->city,
                'state_id' => 1,
                'country_id' => $user->country_id,
                'pincode' => $faker->postcode,
                'is_default' => true,
            ]);
        }

        // Create some cart items
        $users = User::where('email', '!=', 'admin@buyhelp.com')->limit(5)->get();
        $products = Product::limit(10)->get();
        foreach ($users as $user) {
            foreach ($products->random(3) as $product) {
                Cart::create([
                    'consumer_id' => $user->id,
                    'product_id' => $product->id,
                    'quantity' => rand(1, 3),
                    'variation_id' => null,
                ]);
            }
        }

        // Create some wishlist items
        foreach ($users as $user) {
            foreach ($products->random(5) as $product) {
                Wishlist::create([
                    'consumer_id' => $user->id,
                    'product_id' => $product->id,
                ]);
            }
        }

        // Create some reviews
        foreach ($products->random(20) as $product) {
            Review::create([
                'review_image_id' => null,
                'product_id' => $product->id,
                'consumer_id' => $users->random()->id,
                'rating' => rand(3, 5),
                'description' => $faker->sentence(10),
                'status' => true,
            ]);
        }

        // Create Order Statuses if they don't exist
        $orderStatuses = [
            'pending', 'processing', 'shipped', 'out-for-delivery', 'delivered', 'cancelled', 'returned'
        ];

        foreach ($orderStatuses as $index => $status) {
            OrderStatus::firstOrCreate(
                ['slug' => $status],
                [
                    'name' => ucfirst(str_replace('-', ' ', $status)),
                    'sequence' => $index + 1,
                    'status' => true,
                ]
            );
        }

        // Create some sample orders
        $orderStatuses = OrderStatus::all();
        foreach ($users->random(10) as $user) {
            $order = Order::create([
                'order_number' => 'ORD-' . strtoupper($faker->bothify('??######')),
                'consumer_id' => $user->id,
                'amount' => $faker->randomFloat(2, 50, 500),
                'total' => $faker->randomFloat(2, 50, 500),
                'tax_total' => $faker->randomFloat(2, 5, 50),
                'shipping_total' => $faker->randomFloat(2, 0, 20),
                'coupon_total_discount' => $faker->randomFloat(2, 0, 50),
                'points_amount' => 0,
                'wallet_balance' => 0,
                'payment_method' => 'stripe',
                'payment_status' => 'paid',
                'order_status_id' => $orderStatuses->random()->id,
                'delivery_description' => $faker->sentence(8),
                'delivery_interval' => rand(1, 7),
                'billing_address_id' => null,
                'shipping_address_id' => null,
                'created_at' => $faker->dateTimeBetween('-30 days', 'now'),
            ]);
        }

        // Create some notices
        for ($i = 0; $i < 5; $i++) {
            Notice::create([
                'title' => $faker->sentence(4),
                'description' => $faker->paragraph(2),
                'priority' => rand(1, 3),
                'status' => true,
            ]);
        }

        echo "✅ Database seeded successfully with comprehensive fake data!\n";
        echo "📧 Admin login: admin@buyhelp.com\n";
        echo "🔑 Password: password123\n";
        echo "📊 Created:\n";
        echo "   - " . User::count() . " users\n";
        echo "   - " . Category::count() . " categories\n";
        echo "   - " . Brand::count() . " brands\n";
        echo "   - " . Product::count() . " products\n";
        echo "   - " . Store::count() . " stores\n";
        echo "   - " . Blog::count() . " blog posts\n";
        echo "   - " . Order::count() . " orders\n";
        echo "   - " . Review::count() . " reviews\n";
        echo "   - And much more!\n";
    }
}