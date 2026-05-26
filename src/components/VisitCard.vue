<script setup lang="ts">
import { ref } from "vue";

interface Link {
    label: string;
    href: string;
}

const photoSrc = ref("/photo.webp");

const name = "Khisrav Kh.";
const tagline = "Full-Stack Разработчик";
const description =
    "Создаю продуманные, производительные и красивые цифровые решения. Превращаю сложные задачи в элегантные системы.";

const links: Link[] = [
    { label: "GitHub", href: "https://github.com/Khisrav" },
    { label: "Telegram", href: "https://t.me/kh_tj" },
];
</script>

<template>
    <main
        class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-obscur-bg"
    >
        <!-- Background painterly gradient orbs -->
        <div
            class="pointer-events-none absolute -top-[10%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-obscur-gold/[0.03] blur-[140px]"
        />
        <div
            class="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[400px] w-[400px] rounded-full bg-obscur-gold/[0.02] blur-[120px]"
        />
        <div
            class="pointer-events-none absolute top-1/4 right-[5%] h-[250px] w-[250px] rounded-full bg-obscur-gold/[0.015] blur-[90px]"
        />

        <!-- Subtle vignette -->
        <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.4)_100%)]"
        />

        <!-- Top ornate rule -->
        <div
            class="absolute top-0 left-0 right-0 flex justify-center pt-8 sm:pt-12"
        >
            <svg
                width="320"
                height="48"
                viewBox="0 0 320 48"
                fill="none"
                class="text-obscur-gold/30"
            >
                <!-- Left flourish -->
                <path
                    d="M0 24 Q20 24 30 18 T50 12"
                    stroke="currentColor"
                    stroke-width="0.5"
                    fill="none"
                />
                <path
                    d="M0 24 Q20 24 30 30 T50 36"
                    stroke="currentColor"
                    stroke-width="0.5"
                    fill="none"
                />
                <circle cx="55" cy="24" r="2.5" fill="currentColor" />
                <!-- Center diamond -->
                <path
                    d="M160 12 L168 24 L160 36 L152 24 Z"
                    stroke="currentColor"
                    stroke-width="0.8"
                    fill="none"
                />
                <circle cx="160" cy="24" r="1.5" fill="currentColor" />
                <!-- Right flourish -->
                <path
                    d="M320 24 Q300 24 290 18 T270 12"
                    stroke="currentColor"
                    stroke-width="0.5"
                    fill="none"
                />
                <path
                    d="M320 24 Q300 24 290 30 T270 36"
                    stroke="currentColor"
                    stroke-width="0.5"
                    fill="none"
                />
                <circle cx="265" cy="24" r="2.5" fill="currentColor" />
                <!-- Horizontal lines -->
                <line
                    x1="60"
                    y1="24"
                    x2="150"
                    y2="24"
                    stroke="currentColor"
                    stroke-width="0.5"
                />
                <line
                    x1="170"
                    y1="24"
                    x2="260"
                    y2="24"
                    stroke="currentColor"
                    stroke-width="0.5"
                />
            </svg>
        </div>

        <!-- Main content -->
        <div
            class="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 sm:flex-row sm:gap-16 sm:px-10"
        >
            <!-- Photo section with ornate rectangular frame -->
            <div class="relative flex-shrink-0">
                <!-- Outer glow -->
                <div
                    class="absolute inset-0 h-[280px] w-[210px] sm:h-[360px] sm:w-[270px] rounded-lg bg-obscur-gold/[0.04] blur-[60px]"
                />

                <!-- Ornate frame container -->
                <div
                    class="relative h-[280px] w-[210px] sm:h-[360px] sm:w-[270px]"
                >
                    <!-- Outer gold frame -->
                    <div
                        class="absolute inset-0 rounded-sm border-2 border-obscur-gold/25 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                    />

                    <!-- Inner frame -->
                    <div
                        class="absolute inset-[8px] rounded-sm border border-obscur-gold/15"
                    />

                    <!-- Photo container with 3:4 ratio -->
                    <div
                        class="absolute inset-[14px] overflow-hidden bg-obscur-bg-soft"
                    >
                        <img
                            :src="photoSrc"
                            alt="Портрет"
                            class="h-full w-full object-cover object-[center_top]"
                        />
                        <!-- Subtle inner shadow / vignette on photo -->
                        <div
                            class="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"
                        />
                    </div>

                    <!-- Corner ornaments - top left -->
                    <svg
                        class="absolute -top-[14px] -left-[14px] h-10 w-10 text-obscur-gold/40"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M2 2 L2 24 Q2 12 14 12 Q12 2 24 2 L2 2Z"
                            fill="currentColor"
                            opacity="0.6"
                        />
                        <path
                            d="M2 2 L20 2 Q10 2 10 12 L2 2Z"
                            stroke="currentColor"
                            stroke-width="1"
                            fill="none"
                        />
                        <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>

                    <!-- Corner ornaments - top right -->
                    <svg
                        class="absolute -top-[14px] -right-[14px] h-10 w-10 rotate-[90deg] text-obscur-gold/40"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M2 2 L2 24 Q2 12 14 12 Q12 2 24 2 L2 2Z"
                            fill="currentColor"
                            opacity="0.6"
                        />
                        <path
                            d="M2 2 L20 2 Q10 2 10 12 L2 2Z"
                            stroke="currentColor"
                            stroke-width="1"
                            fill="none"
                        />
                        <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>

                    <!-- Corner ornaments - bottom left -->
                    <svg
                        class="absolute -bottom-[14px] -left-[14px] h-10 w-10 -rotate-[90deg] text-obscur-gold/40"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M2 2 L2 24 Q2 12 14 12 Q12 2 24 2 L2 2Z"
                            fill="currentColor"
                            opacity="0.6"
                        />
                        <path
                            d="M2 2 L20 2 Q10 2 10 12 L2 2Z"
                            stroke="currentColor"
                            stroke-width="1"
                            fill="none"
                        />
                        <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>

                    <!-- Corner ornaments - bottom right -->
                    <svg
                        class="absolute -bottom-[14px] -right-[14px] h-10 w-10 rotate-180 text-obscur-gold/40"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M2 2 L2 24 Q2 12 14 12 Q12 2 24 2 L2 2Z"
                            fill="currentColor"
                            opacity="0.6"
                        />
                        <path
                            d="M2 2 L20 2 Q10 2 10 12 L2 2Z"
                            stroke="currentColor"
                            stroke-width="1"
                            fill="none"
                        />
                        <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>

                    <!-- Mid-edge ornaments -->
                    <div
                        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                                d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
                                fill="currentColor"
                                class="text-obscur-gold/30"
                            />
                        </svg>
                    </div>
                    <div
                        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                                d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
                                fill="currentColor"
                                class="text-obscur-gold/30"
                            />
                        </svg>
                    </div>
                    <div
                        class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                                d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
                                fill="currentColor"
                                class="text-obscur-gold/30"
                            />
                        </svg>
                    </div>
                    <div
                        class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                                d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
                                fill="currentColor"
                                class="text-obscur-gold/30"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Text content -->
            <div
                class="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
                <!-- Guillemet quote style heading -->
                <p
                    class="text-xs font-jetbrains-mono font-medium uppercase tracking-[0.35em] text-obscur-gold-dim"
                >
                    [DEBUG] Загрузка информации... ОК.
                </p>

                <!-- Name -->
                <h1
                    class="mt-4 font-cinzel text-4xl tracking-wide text-obscur-text sm:text-5xl md:text-6xl"
                >
                    {{ name }}
                </h1>

                <!-- Tagline with decorative line -->
                <div class="mt-5 flex items-center gap-4">
                    <div class="hidden h-px w-10 bg-obscur-gold/25 sm:block" />
                    <p
                        class="font-cinzel text-sm font-medium uppercase tracking-[0.2em] text-obscur-gold-dim"
                    >
                        {{ tagline }}
                    </p>
                </div>

                <!-- Divider -->
                <div class="my-8 flex items-center gap-3">
                    <div class="h-px w-8 bg-obscur-gold/20" />
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        class="text-obscur-gold/40"
                    >
                        <path
                            d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
                            fill="currentColor"
                        />
                    </svg>
                    <div class="h-px w-8 bg-obscur-gold/20" />
                </div>

                <!-- Description -->
                <p
                    class="max-w-md text-xl font-cinzel font-medium leading-relaxed text-obscur-text-muted"
                >
                    {{ description }}
                </p>

                <!-- Links with ornate button style -->
                <nav class="mt-10">
                    <ul
                        class="flex flex-wrap justify-center gap-3 sm:justify-start"
                    >
                        <li v-for="link in links" :key="link.label">
                            <a
                                :href="link.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="group relative inline-flex items-center px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-obscur-text-muted transition-colors duration-300 hover:text-obscur-gold-bright"
                            >
                                <!-- Button frame corners -->
                                <span
                                    class="absolute top-0 left-0 h-2 w-2 border-t border-l border-obscur-gold/30 transition-colors duration-300 group-hover:border-obscur-gold/60"
                                />
                                <span
                                    class="absolute top-0 right-0 h-2 w-2 border-t border-r border-obscur-gold/30 transition-colors duration-300 group-hover:border-obscur-gold/60"
                                />
                                <span
                                    class="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-obscur-gold/30 transition-colors duration-300 group-hover:border-obscur-gold/60"
                                />
                                <span
                                    class="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-obscur-gold/30 transition-colors duration-300 group-hover:border-obscur-gold/60"
                                />
                                <!-- Background fill on hover -->
                                <span
                                    class="absolute inset-0 bg-obscur-gold/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- Bottom ornate rule -->
        <div
            class="absolute bottom-0 left-0 right-0 flex justify-center pb-8 sm:pb-12"
        >
            <svg
                width="280"
                height="40"
                viewBox="0 0 280 40"
                fill="none"
                class="text-obscur-gold/25"
            >
                <!-- Left scroll -->
                <path
                    d="M0 20 Q15 10 30 20 Q45 30 60 20 Q75 10 90 20"
                    stroke="currentColor"
                    stroke-width="0.5"
                    fill="none"
                />
                <!-- Center diamond with play icon -->
                <path
                    d="M140 10 L148 20 L140 30 L132 20 Z"
                    stroke="currentColor"
                    stroke-width="0.8"
                    fill="none"
                />
                <path d="M138 18 L143 20 L138 22 Z" fill="currentColor" />
                <!-- Right scroll -->
                <path
                    d="M190 20 Q205 10 220 20 Q235 30 250 20 Q265 10 280 20"
                    stroke="currentColor"
                    stroke-width="0.5"
                    fill="none"
                />
                <!-- Connecting lines -->
                <line
                    x1="90"
                    y1="20"
                    x2="130"
                    y2="20"
                    stroke="currentColor"
                    stroke-width="0.5"
                />
                <line
                    x1="150"
                    y1="20"
                    x2="190"
                    y2="20"
                    stroke="currentColor"
                    stroke-width="0.5"
                />
            </svg>
        </div>
    </main>
</template>

<style></style>
