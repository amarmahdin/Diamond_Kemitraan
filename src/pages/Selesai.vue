<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import sidebar from '@/components/sidebar.vue';
import navbar from '@/components/navbar.vue';
</script>

<template>
    <div class="flex">    
    <sidebar/>
    <div class="flex-grow">
        <navbar/>
        <div class="w-auto h-[54px]">
            <h1 class="text-sm text-[#7F7F80] pt-3 ml-6 font-medium">Selesai</h1>
        </div>
        <div class="h-auto py-3 px-4 bg-slate-100">

            <!-- Start Content -->
            <div class="w-[1217px] h-auto p-1 rounded-lg bg-white min-h-screen mx-auto">
                <div class="flex pl-4 pt-4">
                    <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                    <h1 class="text-xl font-medium ml-[6px]">Selesai</h1>
                </div>
                <span class="text-base text-[#9C9C9C] pl-4">Daftar Permintaan Kemitraan</span>

                <div class="mt-4">
                    <div class="flex">
                    <div><div class="ml-4 w-[280px] py-2 border-[1px] rounded-s-lg flex">
                        <form action="search" class="flex">
                            <input type="text" name="search" placeholder="Cari sesuatu disini ..." class="ml-4 w-[250px] outline-none">
                        </form></div>
                    </div>
                    <div class="w-10 h-10 bg-[#2671D9] rounded-e-lg -translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[40px] ml-[6px] cursor-pointer" viewBox="0 0 101 101" id="Search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </div>
                
                    <div class="w-[90px] ml-2 relative">
                                <button @click="filterDropdown" :class="{'rounded-t-lg': isFilterOpen, 'rounded-lg': !isFilterOpen}" class="w-[90px] border-[1px] px-1 py-2 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[14px] mt-2 cursor-pointer" viewBox="0 0 6.35 6.35" id="filter">
                                        <path fill-rule="evenodd" d="M2 .998A1 1 0 0 0 .996 2.002v4.002a1 1 0 0 0 .252.656l6.754 7.715V22a1 1 0 0 0 1.55.834l6-4.002a1 1 0 0 0 .444-.834v-3.623l6.756-7.715a1 1 0 0 0 .25-.656V2.002A1 1 0 0 0 21.998.998H2zm.996 2h18.006V5H2.996V2.998zM4.2 7h15.6l-5.553 6.34a1 1 0 0 0-.242.658v3.469l-4.002 2.666v-6.135a1 1 0 0 0-.25-.658L4.199 7z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" paint-order="stroke fill markers" transform="scale(.26458)" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;isolation:auto;mix-blend-mode:normal" fill="#2671d9" class="color000000 svgShape"></path>
                                    </svg>
                                    <span class="text-sm ml-2 mt-1">{{FilterOption || 'Filter'}}</span>
                                </button>
                                <div v-show="isFilterOpen" class="absolute w-[90px] border-[1px] rounded-b-lg bg-white z-10">
                                    <ul class="text-sm w-full">
                                        <li @click="filterOption('Item 1')" :class="{' text-black': FilterOption === 'Item 1', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': FilterOption !== 'Item 1'}" class="cursor-pointer border-b px-4 py-2">Item 1</li>
                                        <li @click="filterOption('Item 2')" :class="{' text-black': FilterOption === 'Item 2', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': FilterOption !== 'Item 2'}" class="cursor-pointer border-b px-4 py-2">Item 2</li>
                                        <li @click="filterOption('Item 3')" :class="{' text-black': FilterOption === 'Item 3', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': FilterOption !== 'Item 3'}" class="cursor-pointer px-4 py-2">Item 3</li>
                                    </ul>
                                </div>
                            </div>
                </div>

                <!-- Start Data -->
                <div class="w-[1170px] overflow-auto rounded-lg border-[1px] mt-4 ml-4 h-auto">
                    <table class="table-auto w-full text-left">
                        <!-- Kolom -->
                        <thead class="text-xs text-[#4D5E80] rounded-lg">
                            <tr class="bg-none border-b-2">
                                <th class="w-[74px] px-3 h-[48px]">
                                    <div class="flex justify-between">No.
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[268px] px-3">
                                    <div class="flex justify-between">Judul                                    
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[130px] px-3">
                                    <div class="flex justify-between">No Pengajuan                                
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[124px] px-3">
                                    <div class="flex justify-between">Tipe
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                    </div>
                                </th>
                                <th class="w-[124px] px-3">
                                    <div class="flex justify-between">Status
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div>
                                </th>
                                <th class="w-[278px] px-3">
                                    <div class="flex justify-between">Keterangan
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                    </div>
                                </th>
                                <th class="w-[54px] px-3"></th>
                            </tr>
                        </thead>
                        <!-- Baris -->
                        <tbody> 
                            <tr v-for="row in paginatedRows" :key="row.id" class="bg-white border-b text-sm text-[#333333] h-[77px]">
                                <td class="w-[74px] px-3">{{ row.id }}</td>
                                <td class="w-[268px] px-3">{{ row.judul }}</td>
                                <td class="w-[124px] px-3">{{ row.code }}</td>
                                <td class="w-[124px] px-3">{{ row.type }}</td>
                                <td class="w-[97px] px-3">
                                    <span :class="row.statusClass" class="px-[8px] py-1 text-xs font-medium border-1 rounded-[100px]">{{ row.status }}</span>
                                </td>
                                <td class="w-[278px] px-3">{{ row.ket }}
                                    <span class="block text-[#7F7F80]">{{ row.tgl }}</span>
                                </td>
                                <td class="w-[54px] px-3">
                                    <div class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- End data -->
                </div>

                <!-- Start Menampilkan -->
                <div class="w-[1170px] ml-4 py-3  flex justify-between">
                    <div class="flex">
                    <span class="text-sm text-[#333333] mt-[5px]">Menampilkan</span>
                    <div class="w-[44px] ml-4 relative">
                        <button @click="toggleDataDropdown" :class="[isDataOpen ? 'rounded-b-lg' : 'rounded-lg', 'flex w-[44px] h-8 border-[1px]']">
                            <span class="text-sm mt-1 pl-3">{{ DataOption || '7' }}</span>
                            <svg width="16" height="16" class="mt-2 transition-transform duration-300" :class="{'rotate-180': isDataOpen}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10.2663L4 6.26634L4.93333 5.33301L8 8.39967L11.0667 5.33301L12 6.26634L8 10.2663Z" fill="#2671D9"/>
                            </svg>
                        </button>
                        <div v-show="isDataOpen" class="absolute bottom-full w-[44px] border-[1px] rounded-t-lg cursor-pointer z-10 bg-white">
                            <ul class="text-sm w-full">
                                <li @click="selectDataOption('5')" :class="{ 'text-black': rowsPerPage === 5, '': rowsPerPage !== 5 }" class="cursor-pointer border-b pl-4 py-1 hover:font-semibold">5</li>
                                <li @click="selectDataOption('7')" :class="{ 'text-black': rowsPerPage === 7, '': rowsPerPage !== 7 }" class="cursor-pointer border-b py-1 pl-4 hover:font-semibold">7</li>
                                <li @click="selectDataOption('8')" :class="{ 'text-black': rowsPerPage === 8, '': rowsPerPage !== 8 }" class="cursor-pointer pl-4 py-1 hover:font-semibold">8</li>
                            </ul>
                        </div>
                    </div>
                    <p class="text-sm text-[#333333] mt-1 ml-3">dari <span class="font-semibold text-sm">{{ dataRows.length }}</span> Data</p>
                    </div>
                    <div class="pagination-controls">
                        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 6.70711C0.402369 6.31658 0.402369 5.68342 0.792893 5.29289L5.79289 0.292893C6.18342 -0.0976314 6.81658 -0.0976314 7.20711 0.292893C7.59763 0.683417 7.59763 1.31658 7.20711 1.70711L2.91421 6L7.20711 10.2929C7.59763 10.6834 7.59763 11.3166 7.20711 11.7071C6.81658 12.0976 6.18342 12.0976 5.79289 11.7071L0.792893 6.70711Z" fill="#7F7F80"/>
                            </svg>
                        </button>
                        <div v-for="page in paginationPages" :key="page">
                            <button v-if="page !== '...'" @click="changePage(page)" :class="{ active: page === currentPage }">
                                {{ page }}
                            </button><span v-else>...</span>
                        </div>
                        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#7F7F80"/>
                            </svg>
                        </button>
                     </div>
                </div>
                <!-- akhir menampilkan -->

                <svg width="1170" class="mt-3 mb-3 ml-4" height="1" viewBox="0 0 1160 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1160" height="0" transform="translate(0 1)" fill="white"/>
                        <line y1="0.5" x2="1160" y2="0.5" stroke="#E5E7E9"/>
                    </svg>
            </div>
            <!-- End Content -->

        </div>
    </div>
</div>
</template>

<script >
import { ref } from 'vue';

// Filter
const isFilterOpen = ref(false);
const FilterOption = ref('');

function filterDropdown() {
  isFilterOpen.value = !isFilterOpen.value;

}
function filterOption(option) {
    FilterOption.value = option;
  isFilterOpen.value = false;  
}

// Data
export default {
  data() {
    return {
      isDataOpen: false,
      DataOption: '8',
      currentPage: 1,
      rowsPerPage: 8,
      dataRows: [
        { id: 1, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 2, judul: 'Pemanfaatan Tiang Penyangga Jar...', code: '100923', type: 'PKS', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 3, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 4, judul: 'NDA Penjajakan Kerja Sama berkai...', code: '200223', type: 'NDA', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 5, judul: 'Kerja Sama Reseller Produk IBM', code: '100132', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 6, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 7, judul: 'Pemanfaatan Tiang Penyangga Jar...', code: '100923', type: 'PKS', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 8, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 9, judul: 'NDA Penjajakan Kerja Sama berkai...', code: '200223', type: 'NDA', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 10, judul: 'Kerja Sama Reseller Produk IBM', code: '100132', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 11, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 12, judul: 'Pemanfaatan Tiang Penyangga Jar...', code: '100923', type: 'PKS', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 13, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 14, judul: 'NDA Penjajakan Kerja Sama berkai...', code: '200223', type: 'NDA', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 15, judul: 'Kerja Sama Reseller Produk IBM', code: '100132', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 16, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 17, judul: 'Pemanfaatan Tiang Penyangga Jar...', code: '100923', type: 'PKS', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 18, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 19, judul: 'NDA Penjajakan Kerja Sama berkai...', code: '200223', type: 'NDA', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 20, judul: 'Kerja Sama Reseller Produk IBM', code: '100132', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 21, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 22, judul: 'Pemanfaatan Tiang Penyangga Jar...', code: '100923', type: 'PKS', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 23, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 24, judul: 'NDA Penjajakan Kerja Sama berkai...', code: '200223', type: 'NDA', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 25, judul: 'Kerja Sama Reseller Produk IBM', code: '100132', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 26, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 27, judul: 'Pemanfaatan Tiang Penyangga Jar...', code: '100923', type: 'PKS', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 28, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
        { id: 29, judul: 'NDA Penjajakan Kerja Sama berkai...', code: '200223', type: 'NDA', status: 'Ditolak', statusClass: 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]', ket:'Pengajuan Ditolak Oleh Manager', tgl:'Tanggal : 04/04/2024' },
        { id: 30, judul: 'Kerja Sama Reseller Produk IBM', code: '100132', type: 'PKS', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]', ket:'Pengajuan Selesai', tgl:'Tanggal : 04/04/2024' },
    ]
    };
  },
  computed: {
    totalPages() {
        return Math.ceil(this.dataRows.length / this.rowsPerPage);
    },
    paginatedRows() {
        const start = (this.currentPage - 1) * this.rowsPerPage;
        const end = start + this.rowsPerPage;
        return this.dataRows.slice(start, end);
    },
    paginationPages() {
            const totalPages = Math.ceil(this.dataRows.length / this.rowsPerPage);
            let pages = [];

        if (totalPages <= 7) {
            
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (this.currentPage <= 4) {
                pages = [1, 2, 3, 4, 5, '...', totalPages];
            } else if (this.currentPage > totalPages - 4) {
                pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', totalPages];
            }
        }

        return pages;
    },
  },
  methods: {
    toggleDataDropdown() {
        this.isDataOpen = !this.isDataOpen;
    },
    goToPage(page) {
        console.log('Attempting to go to page:', page);
        if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        }
    },
    changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        }
    },
    selectDataOption(option) {
        const newRowsPerPage = Number(option);
        this.DataOption = option;
        this.rowsPerPage = newRowsPerPage;
        console.log('Data Option:', this.DataOption);
        console.log('Rows per Page:', this.rowsPerPage);

        const totalPages = Math.ceil(this.dataRows.length / this.rowsPerPage);
        if (this.currentPage > totalPages) {
        this.currentPage = totalPages;
        }

        this.isDataOpen = false;
    },
  }
};

</script>