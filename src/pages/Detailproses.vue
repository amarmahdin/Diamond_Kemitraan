<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import sidebar from '../components/sidebar.vue'
import navbar from '../components/navbar.vue'
</script>

<template>
    <div class="flex">    
    <sidebar/>
    <div class="flex-grow">
        <navbar/>
        <div class="h-[54px] flex">
                <router-link to="/Proses"><h1 class="text-[#2671D9] text-sm ml-6 mt-3">Proses</h1></router-link>
                <svg width="16" height="16" viewBox="0 0 16 16" class="mt-[19px] ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L6.20711 13.7071C5.81658 14.0976 5.18342 14.0976 4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929L9.08579 8L4.79289 3.70711C4.40237 3.31658 4.40237 2.68342 4.79289 2.29289C5.18342 1.90237 5.81658 1.90237 6.20711 2.29289L11.2071 7.29289Z" fill="#7F7F80"/>
                </svg>
                <h1 class="text-sm text-[#7F7F80] mt-3 ml-1">Detail Pengajuan</h1>
            </div>
        <div class="h-auto py-3 px-4 bg-slate-100">

            <!-- Start Content -->
            <div class="w-[1217px] h-auto p-1 rounded-lg bg-white min-h-screen mx-auto">
                <div class="w-[1170px] h-[56px] ml-4 mt-4 flex justify-between">
                    <div>
                    <div class="flex">
                        <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                        <h1 class="text-xl font-medium ml-[6px]">Detail Pengajuan</h1>
                    </div>
                    <span class="text-base text-[#9C9C9C] pl-4">#no_pengajuan</span>
                    </div>
                    <div class="w-[209px] h-[72px] border-[1px] border-[#E5E7E9] rounded-xl">
                        <div class="w-auto h-[29px] bg-[#FFB200] rounded-t-xl text-[10px] text-[#333333] px-4 py-[7px]">Progres Kemitraan</div>
                        <div class="text-[#FFB200] text-lg font-bold flex px-4">
                            <span class="py-2">Proposal</span>
                            <svg width="60" height="60" class="cursor-pointer" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1290_22642)">
                                <g opacity="0.4" filter="url(#filter1_d_1290_22642)">
                                <path d="M19 26C23.1421 26 26.5 22.6421 26.5 18.5C26.5 14.3579 23.1421 11 19 11C14.8579 11 11.5 14.3579 11.5 18.5C11.5 22.6421 14.8579 26 19 26Z" fill="#FFB200"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3536 18.6464C21.5488 18.8417 21.5488 19.1583 21.3536 19.3536L18.8536 21.8536C18.6583 22.0488 18.3417 22.0488 18.1464 21.8536C17.9512 21.6583 17.9512 21.3417 18.1464 21.1464L20.2929 19L18.1464 16.8536C17.9512 16.6583 17.9512 16.3417 18.1464 16.1464C18.3417 15.9512 18.6583 15.9512 18.8536 16.1464L21.3536 18.6464Z" fill="#F08800"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_1290_22642" x="6" y="6.5" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.778759 0 0 0 0 0.267318 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_22642"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_22642" result="shape"/>
                                </filter>
                                <filter id="filter1_d_1290_22642" x="0.5" y="0" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="4" dy="4"/>
                                <feGaussianBlur stdDeviation="7.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_22642"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_22642" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <!-- Informasi Umum -->
                    <div class="w-[1170px] h-auto border-[1px] rounded-lg ml-4">
                        <button @click="informasiDropdown" class="flex w-[1170px] h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#4791F2] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Informasi Umum</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[968px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownInformasi ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownInformasi" class="px-6 mt-6">
                            <div class="flex mt-6">
                            <div class="ml-6">
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">No. Permintaan</h1>
                                    <span class="text-[#7F7F80]">370.526.7356</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Judul</h1>
                                    <span class="text-[#7F7F80]">Uji Coba Aplikasi Kemitraan</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Nomor Anggaran</h1>
                                    <span class="text-[#7F7F80]">2024113</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Tipe Anggaran</h1>
                                    <span class="text-[#7F7F80]">Capex</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Calon Mitra Bisnis</h1>
                                    <span class="text-[#7F7F80]">Lorem ipsum</span>
                                </div>
                            </div>
                            <div>
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">Metode Kemitraan</h1>
                                    <span class="text-[#7F7F80]">Tunjuk Langsung</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Jenis Material</h1>
                                    <span class="text-[#7F7F80]">Material Only</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Jenis Barang</h1>
                                    <span class="text-[#7F7F80]">Lorem ipsum</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Pelaksana</h1>
                                    <span class="text-[#7F7F80]">Derek Klocko</span>
                                </div>
                            </div>
                            </div>
                            <svg width="1170" height="1" class="mt-6 -translate-x-6" viewBox="0 0 1200 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1200" height="0" transform="translate(0 1)" fill="white"/>
                                <line y1="0.5" x2="1200" y2="0.5" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex py-4">
                            <div class="ml-6">
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">Latar Belakang</h1>
                                    <span class="w-[317px] text-[#7F7F80]">Lorem ipsum dolor sit amet consectetur. Sit tempor tellus ut porttitor. Egestas id tristique at viverra pharetra. Scelerisque sapien commodo scelerisque mattis tortor. Id quam id vitae auctor vitae tristique ultrices facilisis est.</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Dibuat Oleh</h1>
                                    <span class="text-[#7F7F80]">Kenny Carol</span>
                                </div>
                            </div>
                            <div>
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">Catatan</h1>
                                    <span class="w-[317px] text-[#7F7F80]">Lorem ipsum dolor sit amet consectetur. Sit tempor tellus ut porttitor. Egestas id tristique at viverra pharetra. Scelerisque sapien commodo scelerisque mattis tortor. Id quam id vitae auctor vitae tristique ultrices facilisis est.</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Tanggal</h1>
                                    <span class="text-[#7F7F80]">21/3/2023</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Lingkup Pekerjaan -->
                    <div class="w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="pekerjaanDropdown" class="flex w-[1170px] h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#FFA229] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Lingkup Pekerjaan</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[956px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownPekerjaan ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownPekerjaan" class="px-6 mt-6">
                        <h1 class="text-[#333333]">Calon Mitra Bisnis</h1>
                        <span class="text-[#7F7F80]">-</span>
                        <div class="w-[1120px] overflow-auto rounded-lg border-[1px] mb-3 mt-3">
                        <table class="table-auto w-full text-left ">
                            <!-- Kolom -->
                            <thead class="text-xs h-[48px] text-[#4D5E80] rounded-lg">
                                <tr class="bg-none border-b-2">
                                    <th class="w-[74px] px-3 py-[18px]"><div class="flex justify-between">No.
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div></th>
                                    <th class="w-[924px] px-3"><div class="flex justify-between">Judul                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                </tr>
                            </thead>
                            <!-- Baris -->
                            <tbody class="">  
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">1</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">2</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">3</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <!-- tambahkan baris tabel lainnya disini -->
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>

                    <!-- Informasi RAB -->
                    <div class="w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="rabDropdown" class="flex w-[1170px] h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#0FB37D] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Informasi RAB</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[986px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownRab ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownRab" class="px-6 mt-6">
                        <div class="w-[1120px] overflow-auto rounded-lg border-[1px] mb-3 mt-3">
                        <table class="table-auto w-full text-left ">
                            <!-- Kolom -->
                            <thead class="text-xs h-[48px] text-[#4D5E80] rounded-lg">
                                <tr class="bg-none border-b-2">
                                    <th class="w-[74px] px-3 py-[18px]"><div class="flex justify-between">No.
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div></th>
                                    <th class="w-[231px] px-3"><div class="flex justify-between">Aksi                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                    <th class="w-[231px] px-3"><div class="flex justify-between">Deskripsi                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                    <th class="w-[300px] px-3"><div class="flex justify-between">Pelanggan                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                    <th class="w-[200px] px-3"><div class="flex justify-between">PLN/Non PLN                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                </tr>
                            </thead>
                            <!-- Baris -->
                            <tbody class="">  
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">1</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">2</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">3</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">4</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">5</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">6</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">7</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">8</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <!-- tambahkan baris tabel lainnya disini -->
                            </tbody>
                        </table>
                    </div>
                    </div>
                
                    </div>

                    <!-- Berkas Lampiran -->
                    <div class="w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="berkasDropdown" class="flex w-[1170px] h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#F42495] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Berkas Lampiran</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[968px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownBerkas ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownBerkas">
                        <div class="px-6 mt-6 mb-4 flex justify-between">
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKB <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKR <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKF <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>  
                        </div>
                        <div class="px-6 mt-6 mb-4 flex justify-between">
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKO <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Proposal Mitra <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Dokumen Surat Menyurat <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>  
                        </div>
                        <div class="px-6 mt-6 mb-4">
                            <label class="text-[#4D5E80] font-semibold">Dokumen Lainnya <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    </div>

                    <!-- Progres Kemitraan -->
                    <div class="w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="progresDropdown" class="flex w-[1170px] h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#CE8861] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Dokumen Progress Kemitraan</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[870px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownProgres ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownProgres">
                        <div class="px-6 mt-6 mb-4 flex justify-between">
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Surat Penawaran</label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">Surat_Penawaran.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Proposal</label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">proposal.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Evaluasi</label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">evaluasi.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>  
                        </div>
                    </div>
                    </div>
                </div>

                <div class="w-[1170px] mt-4 ml-4 mb-4 flex justify-between">
                    <div>
                        <h1 class="text-base text-[#4D5E80] font-semibold">Tanggapan</h1>
                        <div class="w-[561px] h-[88px] bg-[#E0E0E0] border-[1px] border-[#E5E7E9] rounded-lg mt-2">
                           <p class="text-[#333333] px-4 py-3 text-sm">Lorem ipsum dolor sit amet consectetur. Pretium quis amet quam.</p>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-base text-[#4D5E80] font-semibold">Approval</h1>
                        <div class="w-[561px] h-[88px] bg-[#E0E0E0] border-[1px] border-[#E5E7E9] rounded-lg mt-2">
                           <p class="text-[#333333] px-4 py-3 text-sm">Lorem ipsum dolor sit amet consectetur. Pretium quis amet quam.</p>
                        </div>
                    </div>
                </div>

                <svg width="1170" height="1" class="ml-4" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1170" height="0" transform="translate(0 1)" fill="white"/>
                    <line y1="0.5" x2="1170" y2="0.5" stroke="#E5E7E9"/>
                </svg>



            </div>
            <!-- End Content -->

        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        dropdownInformasi: false,
        dropdownPekerjaan: false,
        dropdownRab: false,
        dropdownBerkas: false,
        dropdownProgres: false,
    };
  },
  methods: {
    informasiDropdown() {
      this.dropdownInformasi = !this.dropdownInformasi;
    },
    pekerjaanDropdown() {
      this.dropdownPekerjaan = !this.dropdownPekerjaan;
    },
    rabDropdown() {
      this.dropdownRab = !this.dropdownRab;
    },
    berkasDropdown() {
      this.dropdownBerkas = !this.dropdownBerkas;
    },
    progresDropdown() {
      this.dropdownProgres = !this.dropdownProgres;
    },
  },
};
</script>