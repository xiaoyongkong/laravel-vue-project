<template>
    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Breadcrumb -->
            <nav class="mb-6">
                <ol class="flex items-center space-x-2 text-sm">
                    <li><Link href="/" class="text-blue-600 hover:underline">Home</Link></li>
                    <li class="text-gray-500">/</li>
                    <li>
                        <Link href="/products" class="text-blue-600 hover:underline">Products</Link>
                    </li>
                    <li class="text-gray-500">/</li>
                    <li class="text-gray-700">{{ product.name }}</li>
                </ol>
            </nav>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Product Images -->
                <div>
                    <div class="bg-white rounded-lg shadow p-4">
                        <img
                            :src="product.mainImage"
                            :alt="product.name"
                            class="w-full h-96 object-cover rounded"
                        >
                        <div class="flex mt-4 space-x-2">
                            <img
                                v-for="(image, index) in product.images"
                                :key="index"
                                :src="image"
                                :alt="`${product.name} ${index + 1}`"
                                class="w-16 h-16 object-cover rounded border cursor-pointer hover:border-blue-500"
                            >
                        </div>
                    </div>
                </div>

                <!-- Product Info -->
                <div>
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="mb-4">
                            <span class="text-sm text-blue-600 font-medium">{{
                                product.brand
                            }}</span>
                            <h1 class="text-2xl font-bold text-gray-900 mt-1">
                                {{ product.name }}
                            </h1>
                        </div>

                        <!-- Rating -->
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400 mr-2">
                                <span v-for="i in 5" :key="i" class="text-lg">
                                    {{ i <= product.rating ? '★' : '☆' }}
                                </span>
                            </div>
                            <span class="text-sm text-gray-600"
                            >({{ product.reviews }} avaliações)</span
                            >
                        </div>

                        <!-- Price -->
                        <div class="mb-6">
                            <div v-if="product.oldPrice" class="text-lg text-gray-500 line-through">
                                R$
                                {{
                                    product.oldPrice.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                    })
                                }}
                            </div>
                            <div class="text-3xl font-bold text-green-600">
                                R$
                                {{
                                    product.price.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                    })
                                }}
                            </div>
                            <div v-if="product.discount" class="text-sm text-green-600 font-medium">
                                {{ product.discount }}% OFF
                            </div>
                            <div class="text-sm text-gray-600 mt-2">
                                em até 12x de R$
                                {{
                                    (product.price / 12).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                    })
                                }}
                                sem juros
                            </div>
                        </div>

                        <!-- Shipping -->
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <div class="flex items-center text-green-700">
                                <svg
                                    class="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                                <span class="font-medium">{{ product.shipping }}</span>
                            </div>
                            <div class="text-sm text-green-600 mt-1">
                                Chegará amanhã se você comprar em 2h 30min
                            </div>
                        </div>

                        <!-- Quantity and Actions -->
                        <div class="mb-6">
                            <div class="flex items-center mb-4">
                                <label class="text-sm font-medium text-gray-700 mr-4"
                                >Quantidade:</label
                                >
                                <div class="flex items-center border border-gray-300 rounded">
                                    <button
                                        class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                        @click="decreaseQuantity"
                                    >
                                        -
                                    </button>
                                    <input
                                        v-model="quantity"
                                        type="number"
                                        min="1"
                                        class="w-16 text-center border-0 focus:ring-0"
                                    >
                                    <button
                                        class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                        @click="increaseQuantity"
                                    >
                                        +
                                    </button>
                                </div>
                                <span class="text-sm text-gray-600 ml-4"
                                >({{ product.stock }} disponíveis)</span
                                >
                            </div>

                            <div class="space-y-3">
                                <button
                                    class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                    @click="buyNow"
                                >
                                    Comprar agora
                                </button>
                                <button
                                    class="w-full bg-yellow-400 text-gray-800 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                                    @click="addToCart"
                                >
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>

                        <!-- Product Features -->
                        <div class="border-t pt-6">
                            <h3 class="font-bold text-lg mb-4">Características principais</h3>
                            <ul class="space-y-2 text-sm">
                                <li
                                    v-for="(feature, index) in product.features"
                                    :key="index"
                                    class="flex justify-between"
                                >
                                    <span class="text-gray-600">{{ feature.name }}:</span>
                                    <span class="font-medium">{{ feature.value }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Description -->
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold mb-4">Descrição do produto</h2>
                <div class="prose max-w-none text-gray-700">
                    <p>{{ product.description }}</p>
                </div>
            </div>

            <!-- Reviews Section -->
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold mb-6">Avaliações</h2>
                <div class="space-y-4">
                    <div
                        v-for="review in product.userReviews"
                        :key="review.id"
                        class="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400 mr-2">
                                <span v-for="i in 5" :key="i" class="text-sm">
                                    {{ i <= review.rating ? '★' : '☆' }}
                                </span>
                            </div>
                            <span class="font-medium text-gray-900">{{ review.user }}</span>
                            <span class="text-sm text-gray-500 ml-2">{{ review.date }}</span>
                        </div>
                        <p class="text-gray-700">{{ review.comment }}</p>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const quantity = ref(1);

const product = {
    id: 1,
    name: 'Smartphone Samsung Galaxy A54 128GB',
    brand: 'Samsung',
    price: 1299.99,
    oldPrice: 1599.99,
    discount: 19,
    rating: 4,
    reviews: 2456,
    stock: 15,
    shipping: 'Frete grátis',
    mainImage: 'https://via.placeholder.com/500x400?text=Samsung+A54+Main',
    images: [
        'https://via.placeholder.com/100x100?text=Img1',
        'https://via.placeholder.com/100x100?text=Img2',
        'https://via.placeholder.com/100x100?text=Img3',
        'https://via.placeholder.com/100x100?text=Img4',
    ],
    features: [
        { name: 'Marca', value: 'Samsung' },
        { name: 'Modelo', value: 'Galaxy A54' },
        { name: 'Memória interna', value: '128 GB' },
        { name: 'Memória RAM', value: '6 GB' },
        { name: 'Tela', value: '6.4"' },
        { name: 'Câmera principal', value: '50 MP' },
        { name: 'Sistema operacional', value: 'Android 13' },
        { name: 'Bateria', value: '5000 mAh' },
    ],
    description:
        'O Samsung Galaxy A54 combina design premium com desempenho excepcional. Com sua tela Super AMOLED de 6.4 polegadas, câmera tripla de até 50MP e bateria de longa duração de 5000mAh, este smartphone oferece uma experiência completa para todas as suas necessidades. Equipado com 6GB de RAM e 128GB de armazenamento interno, garante fluidez nas tarefas do dia a dia e espaço suficiente para todos os seus arquivos.',
    userReviews: [
        {
            id: 1,
            user: 'João Silva',
            rating: 5,
            date: '15 de janeiro de 2024',
            comment:
                'Excelente smartphone! A câmera é incrível e a bateria dura o dia todo. Recomendo muito!',
        },
        {
            id: 2,
            user: 'Maria Santos',
            rating: 4,
            date: '10 de janeiro de 2024',
            comment: 'Muito bom custo-benefício. A tela é linda e o desempenho é ótimo para jogos.',
        },
        {
            id: 3,
            user: 'Pedro Costa',
            rating: 4,
            date: '5 de janeiro de 2024',
            comment: 'Produto chegou rapidinho e bem embalado. Funciona perfeitamente!',
        },
    ],
};

const increaseQuantity = () => {
    if (quantity.value < product.stock) {
        quantity.value++;
    }
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const addToCart = () => {
    console.log(`Adicionado ao carrinho: ${quantity.value}x ${product.name}`);
    // Adicionar lógica do carrinho aqui
};

const buyNow = () => {
    console.log(`Comprar agora: ${quantity.value}x ${product.name}`);
    // Adicionar lógica de compra direta aqui
};
</script>
