<template>
    <AppLayout>
        <!-- Hero Banner -->
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-4xl font-bold mb-4">Encontre tudo o que você precisa</h1>
                    <p class="text-xl mb-8">
                        Milhões de produtos com frete grátis e entrega rápida
                    </p>
                    <button
                        class="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Ver ofertas
                    </button>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Categories Section -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Categorias</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div
                        v-for="category in categories"
                        :key="category.id"
                        class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center cursor-pointer"
                    >
                        <div class="text-4xl mb-2">{{ category.icon }}</div>
                        <h3 class="font-medium text-gray-800">{{ category.name }}</h3>
                    </div>
                </div>
            </section>

            <!-- Featured Products -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Produtos em destaque</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div
                        v-for="product in featuredProducts"
                        :key="product.id"
                        class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
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
                            <div v-if="product.oldPrice" class="text-sm text-gray-500 line-through">
                                R$
                                {{
                                    product.oldPrice.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                    })
                                }}
                            </div>
                            <div class="text-sm text-gray-600 mt-2">
                                {{ product.shipping }}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Offers Section -->
            <section class="mb-12">
                <div class="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-white">
                    <h2 class="text-3xl font-bold mb-4">Ofertas do dia</h2>
                    <p class="text-xl mb-6">Até 70% de desconto em produtos selecionados</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            v-for="offer in offers"
                            :key="offer.id"
                            class="bg-white rounded-lg p-4 text-gray-800"
                        >
                            <img
                                :src="offer.image"
                                :alt="offer.name"
                                class="w-full h-32 object-cover rounded mb-3"
                            />
                            <h3 class="font-medium mb-2">{{ offer.name }}</h3>
                            <div class="text-xl font-bold text-red-600">
                                {{ offer.discount }}% OFF
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Benefits Section -->
            <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow p-6 text-center">
                    <div class="text-4xl mb-4">🚚</div>
                    <h3 class="font-bold text-lg mb-2">Frete grátis</h3>
                    <p class="text-gray-600">Em milhares de produtos a partir de R$ 79</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6 text-center">
                    <div class="text-4xl mb-4">🔒</div>
                    <h3 class="font-bold text-lg mb-2">Compra protegida</h3>
                    <p class="text-gray-600">Seus dados sempre seguros</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6 text-center">
                    <div class="text-4xl mb-4">↩️</div>
                    <h3 class="font-bold text-lg mb-2">Devolução grátis</h3>
                    <p class="text-gray-600">Você tem 30 dias a partir do recebimento</p>
                </div>
            </section>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';

const categories = [
    { id: 1, name: 'Eletrônicos', icon: '📱' },
    { id: 2, name: 'Moda', icon: '👗' },
    { id: 3, name: 'Casa', icon: '🏠' },
    { id: 4, name: 'Esportes', icon: '⚽' },
    { id: 5, name: 'Livros', icon: '📚' },
    { id: 6, name: 'Beleza', icon: '💄' },
];

const featuredProducts = [
    {
        id: 1,
        name: 'Smartphone Samsung Galaxy A54 128GB',
        price: 1299.99,
        oldPrice: 1599.99,
        image: 'https://via.placeholder.com/300x200?text=Samsung+A54',
        shipping: 'Frete grátis',
    },
    {
        id: 2,
        name: 'Notebook Lenovo IdeaPad 3 Intel Core i5',
        price: 2499.99,
        image: 'https://via.placeholder.com/300x200?text=Lenovo+IdeaPad',
        shipping: 'Frete grátis',
    },
    {
        id: 3,
        name: 'Apple AirPods Pro 2ª Geração',
        price: 1899.99,
        oldPrice: 2299.99,
        image: 'https://via.placeholder.com/300x200?text=AirPods+Pro',
        shipping: 'Frete grátis',
    },
    {
        id: 4,
        name: 'Smart TV LG 55" 4K UHD',
        price: 2299.99,
        image: 'https://via.placeholder.com/300x200?text=Smart+TV+LG',
        shipping: 'Frete grátis',
    },
];

const offers = [
    {
        id: 1,
        name: 'Tênis Nike Air Force',
        discount: 35,
        image: 'https://via.placeholder.com/200x150?text=Nike+Air+Force',
    },
    {
        id: 2,
        name: 'Cafeteira Nespresso',
        discount: 45,
        image: 'https://via.placeholder.com/200x150?text=Nespresso',
    },
    {
        id: 3,
        name: 'Fone JBL Tune 720BT',
        discount: 50,
        image: 'https://via.placeholder.com/200x150?text=JBL+Tune',
    },
];
</script>
