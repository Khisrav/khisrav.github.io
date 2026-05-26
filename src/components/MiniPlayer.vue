<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const isLoaded = ref(false);
const showPlayer = ref(false);

const togglePlay = () => {
    if (!audio.value) return;

    if (isPlaying.value) {
        audio.value.pause();
        isPlaying.value = false;
    } else {
        audio.value
            .play()
            .then(() => {
                isPlaying.value = true;
            })
            .catch(() => {
                isPlaying.value = false;
            });
    }
};

const onTimeUpdate = () => {
    if (audio.value) {
        currentTime.value = audio.value.currentTime;
    }
};

const onLoadedMetadata = () => {
    if (audio.value) {
        duration.value = audio.value.duration;
        isLoaded.value = true;
        showPlayer.value = true;
    }
};

const onEnded = () => {
    isPlaying.value = false;
    currentTime.value = 0;
};

const seek = (e: MouseEvent) => {
    if (!audio.value || !duration.value) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.value.currentTime = percent * duration.value;
};

const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
};

onMounted(() => {
    audio.value = new Audio("/lumiere.mp3");
    audio.value.addEventListener("timeupdate", onTimeUpdate);
    audio.value.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.value.addEventListener("ended", onEnded);

    audio.value
        .play()
        .then(() => {
            isPlaying.value = true;
        })
        .catch(() => {
            isPlaying.value = false;
        });
});

onUnmounted(() => {
    if (audio.value) {
        audio.value.pause();
        audio.value.removeEventListener("timeupdate", onTimeUpdate);
        audio.value.removeEventListener("loadedmetadata", onLoadedMetadata);
        audio.value.removeEventListener("ended", onEnded);
    }
});
</script>

<template>
    <Transition name="player-fade">
        <div
            v-if="showPlayer"
            class="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6"
        >
            <div
                class="group relative flex items-stretch rounded-md border border-obscur-gold/20 bg-obscur-bg/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden w-auto"
            >
                <!-- Play/Pause button -->
                <button
                    @click="togglePlay"
                    class="flex w-10 shrink-0 items-center justify-center border-r border-obscur-gold/15 transition-colors duration-300 hover:bg-obscur-gold/8 sm:w-12"
                >
                    <svg
                        v-if="!isPlaying"
                        class="h-4 w-4 text-obscur-gold/70 transition-all duration-300 group-hover:text-obscur-gold"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <svg
                        v-else
                        class="h-4 w-4 text-obscur-gold/70 transition-all duration-300 group-hover:text-obscur-gold"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                    </svg>
                </button>

                <!-- Desktop: info + progress -->
                <div class="hidden flex-col sm:flex flex-1">
                    <div class="flex items-center gap-2 px-3 pt-2 pb-1.5">
                        <span
                            class="font-jetbrains-mono text-[10px] font-medium uppercase tracking-wider text-obscur-gold/50"
                        >
                            Lumiere
                        </span>
                        <span
                            class="font-jetbrains-mono text-[9px] tracking-wide text-obscur-text-muted/40"
                        >
                            {{
                                isLoaded
                                    ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                                    : "..."
                            }}
                        </span>
                    </div>

                    <!-- Progress bar — flush to bottom -->
                    <div
                        v-if="isLoaded"
                        @click="seek"
                        class="h-0.5 w-full cursor-pointer bg-obscur-gold/10 relative overflow-hidden"
                    >
                        <div
                            class="h-full bg-obscur-gold/40 relative overflow-hidden"
                            :style="{
                                width: `${(currentTime / duration) * 100}%`,
                            }"
                        >
                            <span
                                v-if="isPlaying"
                                class="absolute inset-0 progress-shimmer"
                            />
                        </div>
                    </div>
                </div>

                <!-- Mobile: title + animated bars -->
                <div class="flex items-center px-3 py-2 sm:hidden">
                    <span
                        class="font-jetbrains-mono text-[10px] font-medium uppercase tracking-wider text-obscur-gold/50"
                    >
                        Lumiere
                    </span>
                    <span
                        v-if="isPlaying"
                        class="ml-2 flex gap-0.5 items-end h-3"
                    >
                        <span
                            class="w-0.5 bg-obscur-gold/40 rounded-full equalizer-bar"
                            style="--bar-height: 8px; animation-delay: 0ms"
                        />
                        <span
                            class="w-0.5 bg-obscur-gold/40 rounded-full equalizer-bar"
                            style="--bar-height: 12px; animation-delay: 150ms"
                        />
                        <span
                            class="w-0.5 bg-obscur-gold/40 rounded-full equalizer-bar"
                            style="--bar-height: 6px; animation-delay: 300ms"
                        />
                    </span>
                </div>
            </div>

            <!-- Decorative corner accent -->
            <svg
                class="absolute -top-1 -right-1 h-3 w-3 text-obscur-gold/20 sm:h-4 sm:w-4 sm:-top-0.5 sm:-right-0.5"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path d="M16 0 L16 8 L8 0 Z" />
            </svg>
        </div>
    </Transition>
</template>

<style scoped>
.player-fade-enter-active {
    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}
.player-fade-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}
.player-fade-enter-from {
    opacity: 0;
    transform: translateY(8px);
}
.player-fade-leave-to {
    opacity: 0;
    transform: translateY(8px);
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(400%);
    }
}

.progress-shimmer {
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.35) 50%,
        transparent 100%
    );
    animation: shimmer 2s ease-in-out infinite;
}

@keyframes eq-bar {
    0%,
    100% {
        height: 4px;
    }
    50% {
        height: var(--bar-height);
    }
}

.equalizer-bar {
    animation: eq-bar 0.8s ease-in-out infinite;
}
</style>
