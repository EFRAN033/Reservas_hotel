<template>
    <div class="fixed bottom-8 right-8 z-[9999]">
      <!-- Bola flotante -->
      <div
        class="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 shadow-lg shadow-blue-400/30 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400/40 text-white"
        :class="{ 'from-blue-700 to-teal-600': isOpen }"
        @click="toggleChatbot"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
  
      <!-- Ventana del chat -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-4 opacity-0"
      >
        <div
          v-if="isOpen"
          class="absolute bottom-16 right-0 w-80 h-[28rem] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
        >
          <!-- Encabezado -->
          <div class="p-4 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold">Asistente ProVeo</h3>
                <p class="text-xs opacity-80">En línea</p>
              </div>
            </div>
          </div>
  
          <!-- Cuerpo del chat -->
          <div class="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="['flex mb-4', message.sender === 'bot' ? 'justify-start' : 'justify-end']"
            >
              <div
                :class="[
                  'max-w-[80%]',
                  message.sender === 'bot'
                    ? 'bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm'
                    : 'bg-gradient-to-br from-blue-600 to-teal-500 text-white rounded-lg rounded-br-none'
                ]"
              >
                <div class="p-3">
                  <p class="text-sm">{{ message.text }}</p>
                  <p class="text-xs mt-1 text-right opacity-70">
                    {{ message.time }}
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Acciones rápidas -->
          <div v-if="showQuickActions" class="px-4 pt-2 flex flex-wrap gap-2">
            <button
              v-for="(action, index) in quickActions"
              :key="index"
              @click="selectQuickAction(action)"
              class="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition-colors"
            >
              {{ action }}
            </button>
          </div>
  
          <!-- Input de mensaje -->
          <div class="p-3 border-t border-gray-200 bg-white">
            <div class="flex items-center">
              <input
                v-model="userInput"
                @keyup.enter="sendMessage"
                placeholder="Escribe tu pregunta..."
                class="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                @click="sendMessage"
                class="ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatbotProveo',
    data() {
      return {
        isOpen: false,
        userInput: '',
        messages: [
          {
            text: '¡Hola! Soy tu asistente de ProVeo. ¿En qué puedo ayudarte con tu cadena de suministro hoy?',
            sender: 'bot',
            time: this.getCurrentTime()
          }
        ],
        quickActions: [
          'Estado de mi pedido',
          'Niveles de inventario',
          'Problemas con proveedores',
          'Configurar alertas de stock'
        ],
        showQuickActions: true
      }
    },
    methods: {
      toggleChatbot() {
        this.isOpen = !this.isOpen
      },
      sendMessage() {
        if (this.userInput.trim() === '') return
        
        this.messages.push({
          text: this.userInput,
          sender: 'user',
          time: this.getCurrentTime()
        })
        
        this.showQuickActions = false
        const userMessage = this.userInput
        this.userInput = ''
        
        setTimeout(() => {
          this.getBotResponse(userMessage)
        }, 800)
      },
      selectQuickAction(action) {
        this.userInput = action
        this.sendMessage()
      },
      getBotResponse(userMessage) {
        let response = ''
        
        if (userMessage.toLowerCase().includes('pedido')) {
          response = 'Puedo ayudarte con el estado de tus pedidos. Por favor proporcióname el número de pedido o el nombre del proveedor.'
        } else if (userMessage.toLowerCase().includes('inventario') || userMessage.toLowerCase().includes('stock')) {
          response = 'Para consultar niveles de inventario, necesito saber: ¿Qué producto o categoría te interesa? También puedo configurar alertas cuando el stock sea bajo.'
        } else if (userMessage.toLowerCase().includes('proveedor')) {
          response = 'Entiendo que tienes un problema con proveedores. ¿Podrías darme más detalles sobre el inconveniente?'
        } else {
          response = 'Gracias por tu mensaje. Estoy aprendiendo constantemente sobre gestión de cadena de suministro. Mientras tanto, puedo ayudarte con: seguimiento de pedidos, niveles de inventario o problemas con proveedores.'
        }
        
        this.messages.push({
          text: response,
          sender: 'bot',
          time: this.getCurrentTime()
        })
      },
      getCurrentTime() {
        const now = new Date()
        return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
      }
    }
  }
  </script>