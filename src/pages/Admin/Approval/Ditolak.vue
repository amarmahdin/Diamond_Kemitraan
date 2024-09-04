<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import sidemanager from '@/components/sidemanager.vue';
import navbar from '@/components/navbar.vue';
</script>

<template>
    <div class="flex">    
    <sidemanager/>
    <div class="flex-grow">
        <navbar/>
        <div class="w-auto h-[54px]">
            <h1 class="text-sm text-[#7F7F80] pt-3 ml-6 font-medium">Approval</h1>
        </div>
        <div class="h-auto py-3 px-4 bg-slate-100">

            <!-- Start Content -->
            <div class="w-[1217px] h-auto p-1 rounded-lg bg-white min-h-screen mx-auto">
                <div class="flex pl-4 pt-4">
                    <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                    <h1 class="text-xl font-medium ml-[6px]">Approval</h1>
                </div>
                <span class="text-base text-[#9C9C9C] pl-4">Approval Surat Pengajuan Mitra</span>

                <!-- Nav -->
                <div class="px-4 py-4">
                    <ul class="flex flex-row"> 
                    <li :class="{'text-[#2671D9] font-semibold': $route.path === '/Approvalpengajuanbaru', 'text-[#7F7F80]': $route.path !== '/Approvalpengajuanbaru'}" class="py-2">
                        <router-link to="/Approvalpengajuanbaru" class="hover:text-[#2671D9] text-base font-semibold tracking-widest relative group" active-class="text-[#2671D9]" exact>
                            Pengajuan Baru
                            <div class="absolute w-full h-1 my-2 scale-x-0 group-hover:scale-x-100" :class="{'scale-x-100 bg-[#2671D9]': $route.path === '/Approvalpengajuanbaru'}"></div>
                        </router-link>
                    </li>
                    <li :class="{'text-[#2671D9] font-semibold': $route.path === '/Approvaldisetujui', 'text-[#7F7F80]': $route.path !== '/Approvaldisetujui'}" class="py-2">
                        <router-link to="/Approvaldisetujui" class="hover:text-[#2671D9] text-base font-semibold tracking-widest relative group px-6" active-class="text-[#2671D9]" exact>
                            Disetujui
                            <div class="absolute w-[80px] ml-6  h-1 my-2" :class="{'bg-[#2671D9] scale-x-100': $route.path === '/Approvaldisetujui'}"></div>
                        </router-link>
                    </li>
                    <li :class="{'text-[#2671D9] font-semibold': $route.path === '/Approvalditolak', 'text-[#7F7F80]': $route.path !== '/Approvalditolak'}" class="py-2">
                        <router-link to="/Approvalditolak" class="hover:text-[#2671D9] text-base font-semibold tracking-widest relative group" active-class="text-[#2671D9]" exact>
                            Ditolak
                            <div class="absolute w-full h-1 my-2  scale-x-0 group-hover:scale-x-100" :class="{'bg-[#2671D9]  scale-x-100': $route.path === '/Approvalditolak'}"></div>
                        </router-link>
                    </li>
                </ul>
                </div>

                <div class="">
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
                <div class="w-[1170px] overflow-auto rounded-lg border-[1px] mt-4 ml-4 min-h-screen">
                    <table class="table-auto w-full text-left ">
                        <!-- Kolom -->
                        <thead class="text-xs text-[#4D5E80] rounded-lg">
                            <tr class="bg-none border-b-2">
                                <th class="w-[74px] px-3 py-[18px]"><div class="flex justify-between">No.
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[268px] px-3"><div class="flex justify-between">Judul                                    
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[130px] px-3"><div class="flex justify-between">No                                    
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[130px] px-3"><div class="flex justify-between">Tipe
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[130px] px-3"><div class="flex justify-between">Pelaksana
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[130px] px-3"><div class="flex justify-between">Status
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[130px] px-3"><div class="flex justify-between">Status Approval
                                    <svg width="16" height="16" class="cursor-pointer ml-4 mt-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[54px] px-3"></th>
                            </tr>
                        </thead>
                        <!-- Baris -->
                        <tbody>  
                            <tr class="bg-white border-b text-sm text-[#333333]">                          
                                <td class="px-3 py-[18px]">1</td>
                                <td class="px-3">Kerja Sama Penyediaan APN Private</td>
                                <td class="px-3">90224</td>
                                <td class="px-3">PKS</td>
                                <td class="px-3">Pusat</td>
                                <td class="px-3"><span class="px-2 py-1 text-xs bg-[#E7F1FD] font-medium text-[#4791F2] border-[#91BEF7] border-1 rounded-[100px]">Draft</span></td>
                                <td class="px-3 w-auto"><span class="px-[5px] py-1 text-xs bg-[#FFE5E6] font-medium text-[#FF5656] border-[#FD8A8A] border-1 rounded-[100px]">Ditolak</span></td>
                                <td class="px-3 relative">
                                    <div @click="viewDropdown" class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                    <router-link to="/Detailpengajuanadmin">
                                    <div v-show="isViewOpen" 
                                        class="absolute w-[160px] h-[40px] rounded-lg border-[1px] border-[#E5E7E9] flex cursor-pointer -left-[120px] shadow-sm bg-white hover:bg-gray-200 hover:border-[#2671D9]">
                                        <svg width="16" height="12" class="mx-3 my-3" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00054 1.66634C5.20282 1.66634 2.82717 3.48083 1.98949 5.99905C1.989 6.00052 1.989 6.00234 1.98949 6.00381C2.82821 8.52021 5.20296 10.333 7.99937 10.333C10.7971 10.333 13.1727 8.51852 14.0104 6.0003C14.0109 5.99882 14.0109 5.99701 14.0104 5.99554C13.1717 3.47914 10.797 1.66634 8.00054 1.66634ZM0.724321 5.5782C1.7378 2.53148 4.61156 0.333008 8.00054 0.333008C11.3879 0.333008 14.2606 2.52944 15.2753 5.57394C15.367 5.84883 15.367 6.14622 15.2756 6.42115C14.2621 9.46787 11.3883 11.6663 7.99937 11.6663C4.61197 11.6663 1.7393 9.46991 0.72457 6.42541C0.632951 6.15052 0.632864 5.85314 0.724321 5.5782ZM8 4.66634C7.26362 4.66634 6.66666 5.26329 6.66666 5.99967C6.66666 6.73605 7.26362 7.33301 8 7.33301C8.73638 7.33301 9.33333 6.73605 9.33333 5.99967C9.33333 5.26329 8.73638 4.66634 8 4.66634ZM5.33333 5.99967C5.33333 4.52692 6.52724 3.33301 8 3.33301C9.47276 3.33301 10.6667 4.52691 10.6667 5.99967C10.6667 7.47243 9.47276 8.66634 8 8.66634C6.52724 8.66634 5.33333 7.47243 5.33333 5.99967Z" fill="#2671D9"/>
                                        </svg>
                                        <span class="text-[#333333] mt-[10px] hover:text-[#2671D9]">View</span>
                                    </div>
                                    </router-link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-sm text-[#333333]">                          
                                <td class="px-3 py-[18px]">2</td>
                                <td class="px-3">Kerja Sama Penyediaan APN Private</td>
                                <td class="px-3">90224</td>
                                <td class="px-3">PKS</td>
                                <td class="px-3">Pusat</td>
                                <td class="px-3"><span class="px-2 py-1 text-xs bg-[#E7F1FD] font-medium text-[#4791F2] border-[#91BEF7] border-1 rounded-[100px]">Draft</span></td>
                                <td class="px-3 w-auto"><span class="px-[5px] py-1 text-xs bg-[#FFE5E6] font-medium text-[#FF5656] border-[#FD8A8A] border-1 rounded-[100px]">Ditolak</span></td>
                                <td class="px-3">
                                    <div class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-sm text-[#333333]">                          
                                <td class="px-3 py-[18px]">2</td>
                                <td class="px-3">MoU Kerja Sama Pengembangan J...</td>
                                <td class="px-3">90224</td>
                                <td class="px-3">MoU</td>
                                <td class="px-3">Pusat</td>
                                <td class="px-3"><span class="px-2 py-1 text-xs bg-[#E7F1FD] font-medium text-[#4791F2] border-[#91BEF7] border-1 rounded-[100px]">Draft</span></td>
                                <td class="px-3 w-auto"><span class="px-[5px] py-1 text-xs bg-[#FFE5E6] font-medium text-[#FF5656] border-[#FD8A8A] border-1 rounded-[100px]">Ditolak</span></td>
                                <td class="px-3">
                                    <div class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-sm text-[#333333]">                          
                                <td class="px-3 py-[18px]">4</td>
                                <td class="px-3">Lorem ipsum</td>
                                <td class="px-3">90224</td>
                                <td class="px-3">MoU</td>
                                <td class="px-3">Pusat</td>
                                <td class="px-3"><span class="px-2 py-1 text-xs bg-[#FFF6E1] font-medium text-[#FFB200] border-[#FFD064] border-1 rounded-[100px]">Revisi Mayor</span></td>
                                <td class="px-3 w-auto"><span class="px-[5px] py-1 text-xs bg-[#FFE5E6] font-medium text-[#FF5656] border-[#FD8A8A] border-1 rounded-[100px]">Ditolak</span></td>
                                <td class="px-3">
                                    <div class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <!-- tambahkan baris tabel lainnya disini -->
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
                    <button @click="dataDropdown" :class="[isDataOpen ? 'rounded-b-lg' : 'rounded-lg', 'flex w-[44px] h-8 border-[1px]']">
                        <span class="text-sm mt-1 pl-2">{{DataOption || '7'}}</span>
                        <svg width="16" height="16" class="mt-2 transition-transform duration-300" :class="{'rotate-180': isDataOpen}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10.2663L4 6.26634L4.93333 5.33301L8 8.39967L11.0667 5.33301L12 6.26634L8 10.2663Z" fill="#2671D9"/>
                        </svg>
                    </button>
                    <div v-show="isDataOpen" class="absolute bottom-full w-[44px] border-[1px] rounded--lg cursor-pointer z-10 bg-white">
                        <ul class="text-sm w-full">
                            <li @click="dataOption('10')" :class="{' text-black': DataOption === '10', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': DataOption !== '10'}" class="cursor-pointer border-b pl-3 py-1">10</li>
                            <li @click="dataOption('15')" :class="{' text-black': DataOption === '15', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': DataOption !== '15'}" class="cursor-pointer border-b py-1 pl-3">15</li>
                            <li @click="dataOption('20')" :class="{' text-black': DataOption === '20', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': DataOption !== '20'}" class="cursor-pointer pl-3 py-1">20</li>
                        </ul>
                    </div>
                </div>
                    <p class="text-sm text-[#333333] mt-1 ml-3">dari <span class="font-semibold text-sm">25</span> Data</p>
                    </div>
                    <div class="w-3 h-3 flex mr-10 -translate-x-[240px]"> 
                    <button class="px-[10px] h-8">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79289 8.70711C4.40237 8.31658 4.40237 7.68342 4.79289 7.29289L9.79289 2.29289C10.1834 1.90237 10.8166 1.90237 11.2071 2.29289C11.5976 2.68342 11.5976 3.31658 11.2071 3.70711L6.91421 8L11.2071 12.2929C11.5976 12.6834 11.5976 13.3166 11.2071 13.7071C10.8166 14.0976 10.1834 14.0976 9.79289 13.7071L4.79289 8.70711Z" fill="#7F7F80"/>
                        </svg>
                    </button>
                    <button class="px-[10px] text-white rounded-lg h-8 bg-[#2671D9]"><span class="">1</span></button>
                    <button class="px-[10px] rounded-lg h-8 ml-1"><span class="">2</span></button>
                    <button class="px-[10px] rounded-lg h-8 ml-1"><span class="">3</span></button>
                    <button class="px-[10px] rounded-lg h-8 ml-1"><span class="">4</span></button>
                    <button class="px-[10px] rounded-lg h-8 ml-1 "><span class="">5</span></button>
                    <button class="px-[10px] rounded-lg h-8 ml-1 "><span class="">...</span></button>
                    <button class="px-[10px] rounded-lg h-8 ml-1"><span class="">10</span></button>
                    <button class="px-[10px] h-8">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#2671D9"/>
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
const isDataOpen = ref(false);
const DataOption = ref('');

function dataDropdown() {
  isDataOpen.value = !isDataOpen.value;

}
function dataOption(option) {
    DataOption.value = option;
  isDataOpen.value = false;  
}

// View
const isViewOpen = ref(false);

function viewDropdown(){
    isViewOpen.value = !isViewOpen.value;
}

</script>