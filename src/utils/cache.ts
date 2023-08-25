interface Item {
  key: string
  value: any
  ttl: number
}

export class Cache {
  static readonly prefix: string = 'n4'

  /**
   * Make a cache key with prefix.
   *
   * @param key
   * @return string
   */
  static cacheKey(key: string): string {
    return [this.prefix, key].join(':').toUpperCase()
  }

  /**
   * Put item.
   *
   * @param key
   * @param value
   * @param ttl in seconds
   */
  static put(key: string, value: any, ttl: number = 0): boolean {
    const item: Item = {
      key, value, ttl: ttl == 0 ? Date.now() + 60 * 60 * 24 * 15 * 1000 : (Date.now() + ttl * 1000)
    }

    console.log(item)
    localStorage.setItem(this.cacheKey(key), JSON.stringify(item))

    return !!localStorage.getItem(this.cacheKey(key))
  }

  /**
   * Get a item.
   *
   * @param key
   */
  static get(key: string): any {
    const rawValue = localStorage.getItem(this.cacheKey(key));
    if (!rawValue) {
      return null
    }

    console.log(Date.now())
    const item: Item = JSON.parse(rawValue)
    if (item.ttl && item.ttl < Date.now()) {
      this.remove(key)
      return null
    }

    return item.value || null
  }

  /**
   * Remove a cache item.
   *
   * @param key
   */
  static remove(key: string): boolean {
    localStorage.removeItem(this.cacheKey(key))

    return !this.get(key)
  }
}
