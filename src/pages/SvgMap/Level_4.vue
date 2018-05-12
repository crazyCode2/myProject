<!-- 四楼 -->
<template>
  <div>
    <!-- 四楼 -->
    <div class="level level--4" aria-label="Level 4">
      <!-- 四楼地图-->
      <svg class="map map--4" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <title>Map Level 2</title>
        <polygon points="1035.94 787.41 1035.94 423.16 855.37 423.16 855.37 350.52 1187.28 350.52 1187.28 12.59 548.09 12.59 548.09 68.87 437.36 68.87 437.36 12.59 49.37 12.59 49.37 366.5 12.72 366.5 12.72 787.41 356.2 787.41 414.93 584.41 554.4 584.41 627.81 787.41 1035.94 787.41" class="map__ground"></polygon>
        <path d="M1187.28,12.59V350.52H855.37v72.64h180.58V787.41H627.81l-73.41-203H414.93l-58.73,203H12.72V366.5H49.37V12.59h388V68.87H548.08V12.59h639.19M1200,0H535.36V56.28H450.09V0H36.65V353.91H0V800H365.8l2.64-9.13L424.52,597H545.44l70.39,194.65,3,8.35h429.82V410.57H868.09V363.11H1200V0h0Z" class="map__outline"></path>
        <path d="M674.5,647c2,16.3,29.2,31.3,51.4,28.9c51.9-5.8,80.3-107.4,64.7-119c-6.4-4.7-27.9,11.2-70.8,43.1C676.6,632,673.7,640.5,674.5,647z" class="map__lake"></path>
        <ellipse cx="738.82" cy="595.48" rx="13.95" ry="13.8" class="map__tree"></ellipse>
        <ellipse cx="768.46" cy="605.4" rx="13.95" ry="13.8" class="map__tree"></ellipse>
        <ellipse cx="744.64" cy="624.92" rx="13.95" ry="13.8" class="map__tree"></ellipse>
        <rect x="666.9" y="565.6" width="26.3" height="26" class="map__space"></rect>
        <path data-space="4.05" d="M454.8,266.2h63c13.4-0.1,24.4,10.8,24.5,24.2c0,0,0,0,0,0l0,0v199.4c-0.1,13.4-11.1,24.3-24.5,24.2h-63c-13.4,0.1-24.4-10.8-24.5-24.2c0,0,0,0,0,0l0,0V290.4C430.3,277,441.3,266.1,454.8,266.2C454.7,266.2,454.7,266.2,454.8,266.2L454.8,266.2L454.8,266.2z" class="map__space"></path>
        <rect x="282.3" y="478.1" width="26.3" height="26" class="map__space"></rect>
        <rect x="12.7" y="366.5" width="202.4" height="175.1" class="map__space"></rect>
        <rect x="12.7" y="550.6" width="50.9" height="236.8" class="map__space"></rect>
        <circle data-space="4.07" cx="143.1" cy="708.1" r="49.5" class="map__space"></circle>
        <circle data-space="4.01" cx="288.6" cy="658.6" r="66" class="map__space"></circle>
        <polygon data-space="4.02" points="49.4,354.1 362.1,354.1 362.1,230.9 600,230.9 600,297.1 855.4,297.1 855.4,12.6 548.1,12.6 548.1,68.9 437.4,68.9 437.4,12.6 49.4,12.6 " class="map__space"></polygon>
        <rect x="1065.6" y="12.6" width="121.7" height="110.5" class="map__space"></rect>
        <rect data-space="4.03" x="1065.6" y="132.1" width="121.7" height="218.4" class="map__space"></rect>
        <polygon points="901.3,92.6 886.9,67.8 901.3,43 929.9,43 944.2,67.8 929.9,92.6 " class="map__space"></polygon>
        <polygon points="953.3,129.1 938.6,103.6 953.3,78.1 982.8,78.1 997.5,103.6 982.8,129.1 " class="map__space"></polygon>
        <rect x="951.6" y="213.1" width="73.5" height="73.5" class="map__space"></rect>
        <rect data-space="4.06" x="639.6" y="399.5" width="151.5" height="121.1" class="map__space"></rect>
        <rect data-space="4.04" x="855.4" y="423.2" width="180.6" height="364.2" class="map__space"></rect>
        <polygon points="613.2,747 846.6,658.6 846.6,787.4 627.8,787.4" class="map__space"></polygon>
      </svg>
      <!-- 四楼坐标点 -->
      <div class="level__pins">
        <a class="pin pin--4-1" data-category="1" data-space="4.01" href="#" aria-label="Pin for Cold Soup Kitchen">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--tomato"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-tomato"></use></svg>
          </span>
        </a>
        <a class="pin pin--4-2" data-category="2" data-space="4.02" href="#" aria-label="Pin for Docu Dome">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--cinema"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cinema"></use></svg>
          </span>
        </a>
        <a class="pin pin--4-3" data-category="3" data-space="4.03" href="#" aria-label="Pin for Little Artist">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--paint-brush"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-paint-brush"></use></svg>
          </span>
        </a>
        <a class="pin pin--4-4" data-category="4" data-space="4.04" href="#" aria-label="Pin for Sacred Symmetry">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--modx"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-modx"></use></svg>
          </span>
        </a>
        <a class="pin pin--4-5" data-category="4" data-space="4.05" href="#" aria-label="Pin for Hot Tub Festival">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--droplet"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-droplet"></use></svg>
          </span>
        </a>
        <a class="pin pin--4-6" data-category="2" data-space="4.06" href="#" aria-label="Pin for Love 2 Cook">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--cupcake"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cupcake"></use></svg>
          </span>
        </a>
        <a class="pin pin--4-7" data-category="2" data-space="4.07" href="#" aria-label="Pin for Permaculture Hub">
          <span class="pin__icon">
            <svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>
            <svg class="icon icon--logo icon--leafcircle"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-leafcircle"></use></svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        //
      }
    },
    methods: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
