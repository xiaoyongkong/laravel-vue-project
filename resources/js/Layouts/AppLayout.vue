<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="bg-yellow-400 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-14">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <Link href="/" class="text-2xl font-bold text-gray-800">
                            MercadoLibre
                        </Link>
                    </div>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-8">
                        <div class="relative">
                            <input
                                type="text"
                                placeholder="Buscar produtos, marcas e muito mais..."
                                class="w-full px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <button class="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <svg
                                    class="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div class="flex items-center space-x-6">
                        <Link
                            href="/cart"
                            class="text-gray-700 hover:text-gray-900 flex items-center"
                        >
                            <svg
                                class="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13h10M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                                />
                            </svg>
                            Cart
                        </Link>
                        <div class="text-sm">
                            <div class="text-gray-600">Olá! Faça seu login</div>
                            <div class="text-gray-700 font-medium">ou cadastre-se</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Categories -->
            <div class="bg-white border-t border-gray-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center space-x-8 py-3 text-sm">
                        <Link href="/categories" class="text-gray-600 hover:text-blue-600"
                            >Categories</Link
                        >
                        <Link href="/offers" class="text-gray-600 hover:text-blue-600">Offers</Link>
                        <Link href="/history" class="text-gray-600 hover:text-blue-600"
                            >History</Link
                        >
                        <Link href="/supermarket" class="text-gray-600 hover:text-blue-600"
                            >Supermarket</Link
                        >
                        <Link href="/fashion" class="text-gray-600 hover:text-blue-600"
                            >Fashion</Link
                        >
                        <Link href="/home-garden" class="text-gray-600 hover:text-blue-600"
                            >Home & Garden</Link
                        >
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main>
            <slot></slot>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-4">Sobre</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li><a href="#" class="hover:text-blue-600">Mercado Livre</a></li>
                            <li><a href="#" class="hover:text-blue-600">Investor relations</a></li>
                            <li><a href="#" class="hover:text-blue-600">Tendências</a></li>
                            <li><a href="#" class="hover:text-blue-600">Sustentabilidade</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-4">Outros sites</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li><a href="#" class="hover:text-blue-600">Developers</a></li>
                            <li><a href="#" class="hover:text-blue-600">Mercado Pago</a></li>
                            <li><a href="#" class="hover:text-blue-600">Mercado Shops</a></li>
                            <li><a href="#" class="hover:text-blue-600">Mercado Envios</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-4">Ajuda</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li><a href="#" class="hover:text-blue-600">Comprar</a></li>
                            <li><a href="#" class="hover:text-blue-600">Vender</a></li>
                            <li>
                                <a href="#" class="hover:text-blue-600">Resolução de problemas</a>
                            </li>
                            <li><a href="#" class="hover:text-blue-600">Centro de segurança</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-4">Redes sociais</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-blue-600">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-blue-600">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
                    <p>&copy; 2024 MercadoLibre Clone - Projeto de Estudos</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>
