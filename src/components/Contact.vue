<template>
    <section id="contact" class="py-20">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Get In Touch</h2>
            <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="space-y-4">
                        <h3 class="text-xl font-semibold text-gray-800">Contact Information</h3>
                        <p class="text-gray-600">
                            Feel free to reach out to me through any of these platforms:
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                <i class="fab fa-github w-6 h-6"></i>
                            </a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                <i class="fab fa-linkedin w-6 h-6"></i>
                            </a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                <i class="fab fa-twitter w-6 h-6"></i>
                            </a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                <i class="fas fa-envelope w-6 h-6"></i>
                            </a>
                        </div>
                    </div>
                    <form class="space-y-4" @submit.prevent="handleSubmit">
                        <input v-model="form.name" type="text" placeholder="Your Name" class="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                        <input v-model="form.email" type="email" placeholder="Your Email" class="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                        <textarea v-model="form.message" placeholder="Your Message" rows="4" class="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
                        <button
                            class="w-full px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const handleSubmit = () => {
    console.log(form.value)
}
</script>

<style scoped></style>