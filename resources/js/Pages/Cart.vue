<template>
    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Breadcrumb -->
            <nav class="mb-6">
                <ol class="flex items-center space-x-2 text-sm">
                    <li><Link href="/" class="text-blue-600 hover:underline">Home</Link></li>
                    <li class="text-gray-500">/</li>
                    <li class="text-gray-700">Cart</li>
                </ol>
            </nav>

            <div v-if="cartItems.length === 0" class="text-center py-16">
                <div class="text-6xl mb-4">🛒</div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Seu carrinho está vazio</h2>
                <p class="text-gray-600 mb-8">Que tal dar uma olhada em nossas ofertas?</p>
                <Link
                    href="/products"
                    class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    View products
                </Link>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Cart Items -->
                <div class="lg:col-span-2">
                    <h1 class="text-2xl font-bold mb-6">
                        Cart ({{ cartItems.length }}
                        {{ cartItems.length === 1 ? 'item' : 'items' }})
                    </h1>

                    <div class="space-y-4">
                        <div
                            v-for="item in cartItems"
                            :key="item.id"
                            class="bg-white rounded-lg shadow p-6"
                        >
                            <div class="flex flex-col sm:flex-row gap-4">
                                <!-- Product Image -->
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                    class="w-full sm:w-24 h-24 object-cover rounded"
                                />

                                <!-- Product Info -->
                                <div class="flex-1">
                                    <h3 class="font-medium text-gray-900 mb-1">{{ item.name }}</h3>
                                    <p class="text-sm text-gray-600 mb-2">{{ item.description }}</p>
                                    <div class="text-sm text-green-600">{{ item.shipping }}</div>
                                </div>

                                <!-- Quantity and Price -->
                                <div class="flex flex-col sm:items-end gap-2">
                                    <div class="flex items-center border border-gray-300 rounded">
                                        <button
                                            class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                            @click="decreaseQuantity(item.id)"
                                        >
                                            -
                                        </button>
                                        <input
                                            v-model="item.quantity"
                                            type="number"
                                            min="1"
                                            class="w-16 text-center border-0 focus:ring-0"
                                        />
                                        <button
                                            class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                            @click="increaseQuantity(item.id)"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div class="text-right">
                                        <div class="text-lg font-bold text-green-600">
                                            R$
                                            {{
                                                (item.price * item.quantity).toLocaleString(
                                                    'pt-BR',
                                                    { minimumFractionDigits: 2 }
                                                )
                                            }}
                                        </div>
                                        <div
                                            v-if="item.oldPrice"
                                            class="text-sm text-gray-500 line-through"
                                        >
                                            R$
                                            {{
                                                (item.oldPrice * item.quantity).toLocaleString(
                                                    'pt-BR',
                                                    { minimumFractionDigits: 2 }
                                                )
                                            }}
                                        </div>
                                    </div>

                                    <button
                                        class="text-red-600 hover:text-red-800 text-sm"
                                        @click="removeItem(item.id)"
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Continue Shopping -->
                    <div class="mt-6">
                        <Link
                            href="/produtos"
                            class="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Continuar comprando
                        </Link>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow p-6 sticky top-4">
                        <h2 class="text-xl font-bold mb-4">Resumo do pedido</h2>

                        <div class="space-y-3 mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600"
                                    >Subtotal ({{ totalItems }}
                                    {{ totalItems === 1 ? 'item' : 'itens' }}):</span
                                >
                                <span class="font-medium"
                                    >R$
                                    {{
                                        subtotal.toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                        })
                                    }}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Frete:</span>
                                <span class="font-medium text-green-600">Grátis</span>
                            </div>
                            <div v-if="discount > 0" class="flex justify-between">
                                <span class="text-gray-600">Desconto:</span>
                                <span class="font-medium text-green-600">
                                    - R$
                                    {{
                                        discount.toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                        })
                                    }}
                                </span>
                            </div>
                        </div>

                        <div class="border-t pt-4 mb-6">
                            <div class="flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span class="text-green-600"
                                    >R$
                                    {{
                                        total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                                    }}</span
                                >
                            </div>
                            <div class="text-sm text-gray-600 mt-1">
                                Em até 12x de R$
                                {{
                                    (total / 12).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                    })
                                }}
                                sem juros
                            </div>
                        </div>

                        <!-- Discount Coupon -->
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2"
                                >Cupom de desconto</label
                            >
                            <div class="flex">
                                <input
                                    v-model="couponCode"
                                    type="text"
                                    placeholder="Digite seu cupom"
                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300 transition"
                                    @click="applyCoupon"
                                >
                                    Aplicar
                                </button>
                            </div>
                        </div>

                        <!-- Checkout Button -->
                        <button
                            class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
                            @click="checkout"
                        >
                            Finalizar compra
                        </button>

                        <div class="text-xs text-gray-500 text-center">
                            Compra 100% segura e protegida
                        </div>

                        <!-- Payment Methods -->
                        <div class="mt-4 pt-4 border-t">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">
                                Formas de pagamento
                            </h3>
                            <div class="flex space-x-2">
                                <div
                                    class="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center"
                                >
                                    💳
                                </div>
                                <div
                                    class="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center"
                                >
                                    💳
                                </div>
                                <div
                                    class="w-8 h-6 bg-yellow-400 rounded text-gray-800 text-xs flex items-center justify-center"
                                >
                                    💳
                                </div>
                                <div
                                    class="w-8 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center"
                                >
                                    🔒
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { ref, computed } from 'vue';

const couponCode = ref('');

const cartItems = ref([
    {
        id: 1,
        name: 'Smartphone Samsung Galaxy A54 128GB',
        description: 'Preto, 6GB RAM, Câmera 50MP',
        price: 1299.99,
        oldPrice: 1599.99,
        quantity: 1,
        image: 'https://via.placeholder.com/100x100?text=Samsung+A54',
        shipping: 'Frete grátis - Chegará amanhã',
    },
    {
        id: 2,
        name: 'Apple AirPods Pro 2ª Geração',
        description: 'Com cancelamento ativo de ruído',
        price: 1899.99,
        oldPrice: 2299.99,
        quantity: 1,
        image: 'https://via.placeholder.com/100x100?text=AirPods+Pro',
        shipping: 'Frete grátis - Chegará amanhã',
    },
    {
        id: 3,
        name: 'Tênis Nike Air Force 1',
        description: 'Branco, Tamanho 42',
        price: 599.99,
        oldPrice: 699.99,
        quantity: 2,
        image: 'https://via.placeholder.com/100x100?text=Nike+Air+Force',
        shipping: 'Frete grátis - Chegará em 2 dias',
    },
]);

const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

const discount = ref(0);

const total = computed(() => {
    return subtotal.value - discount.value;
});

const increaseQuantity = (itemId) => {
    const item = cartItems.value.find((item) => item.id === itemId);
    if (item) {
        item.quantity++;
    }
};

const decreaseQuantity = (itemId) => {
    const item = cartItems.value.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
    }
};

const removeItem = (itemId) => {
    const index = cartItems.value.findIndex((item) => item.id === itemId);
    if (index > -1) {
        cartItems.value.splice(index, 1);
    }
};

const applyCoupon = () => {
    if (couponCode.value.toUpperCase() === 'DESCONTO10') {
        discount.value = subtotal.value * 0.1; // 10% de desconto
        alert('Cupom aplicado com sucesso! 10% de desconto.');
    } else if (couponCode.value) {
        alert('Cupom inválido.');
    }
};

const checkout = () => {
    console.log('Finalizando compra...', {
        items: cartItems.value,
        total: total.value,
        coupon: couponCode.value,
    });
    alert('Redirecionando para o pagamento...');
};
</script>
