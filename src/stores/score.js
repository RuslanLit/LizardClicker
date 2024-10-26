import { defineStore } from 'pinia'

export const baseLevelScore = 10 // начальное количество кликов 1-й уровень

const levels = new Array(51) // массив общее количество уровней
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i)) // вычисление кликов для перехода на след. уровень

  const levelScores = levels.map((_, level) => {
    let sum = 0

    for (let [index, value] of levels.entries()) {
      if (index >= level) {
        return sum + value
      }
      sum += value
    }


    return sum
 })

 function computeLevelByScore (score) {
  for(let [index, value] of levelScores.entries()) {
    if (score <= value) {
      return {
        level: index,
        value: levels[index],
      }
    }
  }
 }


export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
  getters: {
    level: (state) => computeLevelByScore(state.score),
    currentScore(state) {
      if (this.level.level === 0) {
        return state.score
      }
      return state.score - levelScores[this.level.level -  1]
    },
  },
  actions: {
    add(score = 1) {
      this.score += score
    },
    setScore(score) {
      this.score = score
    }
  }
})

