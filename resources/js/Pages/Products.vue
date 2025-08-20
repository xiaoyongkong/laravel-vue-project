<template>
    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Breadcrumb -->
            <nav class="mb-6">
                <ol class="flex items-center space-x-2 text-sm">
                    <li><Link href="/" class="text-blue-600 hover:underline">Home</Link></li>
                    <li class="text-gray-500">/</li>
                    <li class="text-gray-700">Products</li>
                </ol>
            </nav>

            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar Filters -->
                <aside class="lg:w-1/4">
                    <div class="bg-white rounded-lg shadow p-6">
                        <h3 class="font-bold text-lg mb-4">Filtrar por</h3>

                        <!-- Price Range -->
                        <div class="mb-6">
                            <h4 class="font-semibold mb-3">Preço</h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Até R$ 500</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">R$ 500 - R$ 1000</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">R$ 1000 - R$ 2000</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Mais de R$ 2000</span>
                                </label>
                            </div>
                        </div>

                        <!-- Categories -->
                        <div class="mb-6">
                            <h4 class="font-semibold mb-3">Categoria</h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Eletrônicos</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Moda</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Casa</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Esportes</span>
                                </label>
                            </div>
                        </div>

                        <!-- Shipping -->
                        <div class="mb-6">
                            <h4 class="font-semibold mb-3">Frete</h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Frete grátis</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Entrega rápida</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- Products Grid -->
                <main class="lg:w-3/4">
                    <!-- Search -->
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-bold">Products ({{ products.length }} results)</h1>
                        <select class="border border-gray-300 rounded px-3 py-2">
                            <option>Mais relevantes</option>
                            <option>Menor preço</option>
                            <option>Maior preço</option>
                            <option>Mais vendidos</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            v-for="product in products"
                            :key="product.id"
                            class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                            @click="goToProduct(product.id)"
                        >
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="w-full h-48 object-cover"
                            />
                            <div class="p-4">
                                <h3 class="font-medium text-gray-800 mb-2 line-clamp-2">
                                    {{ product.name }}
                                </h3>
                                <div class="text-2xl font-bold text-green-600 mb-1">
                                    R$
                                    {{
                                        product.price.toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                        })
                                    }}
                                </div>
                                <div
                                    v-if="product.oldPrice"
                                    class="text-sm text-gray-500 line-through"
                                >
                                    R$
                                    {{
                                        product.oldPrice.toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                        })
                                    }}
                                </div>
                                <div class="text-sm text-green-600 mt-2">
                                    {{ product.shipping }}
                                </div>
                                <div class="flex items-center mt-2">
                                    <div class="flex text-yellow-400">
                                        <span v-for="i in 5" :key="i" class="text-sm">
                                            {{ i <= product.rating ? '★' : '☆' }}
                                        </span>
                                    </div>
                                    <span class="text-sm text-gray-600 ml-2"
                                        >({{ product.reviews }})</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="flex justify-center mt-8">
                        <nav class="flex items-center space-x-2">
                            <button
                                class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                            >
                                Anterior
                            </button>
                            <button class="px-3 py-2 rounded bg-blue-600 text-white">1</button>
                            <button
                                class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                            >
                                2
                            </button>
                            <button
                                class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                            >
                                3
                            </button>
                            <button
                                class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                            >
                                Próxima
                            </button>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';

const products = [
    {
        id: 1,
        name: 'Smartphone Samsung Galaxy A54 128GB Preto',
        price: 1299.99,
        oldPrice: 1599.99,
        image: 'https://via.placeholder.com/300x200?text=Samsung+A54',
        shipping: 'Frete grátis',
        rating: 4,
        reviews: 2456,
    },
    {
        id: 2,
        name: 'Notebook Lenovo IdeaPad 3 Intel Core i5 8GB RAM',
        price: 2499.99,
        image: 'https://via.placeholder.com/300x200?text=Lenovo+IdeaPad',
        shipping: 'Frete grátis',
        rating: 5,
        reviews: 892,
    },
    {
        id: 3,
        name: 'Apple AirPods Pro 2ª Geração com Estojo de Carregamento',
        price: 1899.99,
        oldPrice: 2299.99,
        image: 'https://via.placeholder.com/300x200?text=AirPods+Pro',
        shipping: 'Frete grátis',
        rating: 5,
        reviews: 1203,
    },
    {
        id: 4,
        name: 'Smart TV LG 55" 4K UHD ThinQ AI',
        price: 2299.99,
        image: 'https://via.placeholder.com/300x200?text=Smart+TV+LG',
        shipping: 'Frete grátis',
        rating: 4,
        reviews: 567,
    },
    {
        id: 5,
        name: 'Tênis Nike Air Force 1 Branco',
        price: 599.99,
        oldPrice: 699.99,
        image: 'https://via.placeholder.com/300x200?text=Nike+Air+Force',
        shipping: 'Frete grátis',
        rating: 4,
        reviews: 3421,
    },
    {
        id: 6,
        name: 'Console PlayStation 5 825GB SSD',
        price: 3999.99,
        image: 'https://via.placeholder.com/300x200?text=PlayStation+5',
        shipping: 'Frete grátis',
        rating: 5,
        reviews: 789,
    },
    {
        id: 7,
        name: 'Fone de Ouvido JBL Tune 720BT Bluetooth',
        price: 299.99,
        oldPrice: 399.99,
        image: 'https://via.placeholder.com/300x200?text=JBL+Tune',
        shipping: 'Frete grátis',
        rating: 4,
        reviews: 1567,
    },
    {
        id: 8,
        name: 'Monitor Gamer Samsung 24" 144Hz Full HD',
        price: 899.99,
        image: 'https://via.placeholder.com/300x200?text=Monitor+Samsung',
        shipping: 'Frete grátis',
        rating: 4,
        reviews: 234,
    },
    {
        id: 9,
        name: 'Cafeteira Nespresso Vertuo Plus Preta',
        price: 799.99,
        oldPrice: 999.99,
        image: 'https://via.placeholder.com/300x200?text=Nespresso',
        shipping: 'Frete grátis',
        rating: 5,
        reviews: 456,
    },
];

const goToProduct = (id) => {
    // Navigate to product detail page
    console.log('Navigate to product:', id);
};
</script>
