<style lang="scss">
  .component-checkbox {

    $checkboxSize: 22px;
    $defaultColor: #2196F3;
    transform    : translateZ(0);
    
    & {
      position: relative;
      display : inline-block;
      width   : $checkboxSize;
      height  : $checkboxSize;
    }

    input {
      position: absolute;
      top     : 0px;
      left    : 0px;
      right   : 0px;
      bottom  : 0px;
      margin  : 0px;
      padding : 0px;
      cursor  : pointer;
      opacity : 0;
      z-index : 1;
      width   : $checkboxSize;
      height  : $checkboxSize;
    }

    .checkbox-inner {
      position: absolute;
      top     : 0;
      left    : 0;
      right   : 0;
      bottom  : 0;

      background-color: #FFFFFF;
      border-width    : 1px;
      border-style    : solid;
      border          : 1px solid $defaultColor;
      border-radius   : 5px;
      z-index         : 0;
    }

    .check {
      padding     : 2px;
      position    : absolute;
      width       : 1px;
      border      : solid #fff;
      border-width: 0 3px 3px 0;
      transform   : rotate(45deg);
      box-sizing  : border-box;
      top         : 2px;

      height: $checkboxSize - 10px;
      left  : ($checkboxSize / 2) - 4px;
    }

    input:disabled {
      cursor        : default;
      pointer-events: none;
    }

    input:disabled + .checkbox-inner:before {
      cursor        : default;
      pointer-events: none;
    } 

    input:disabled + .checkbox-inner {
      opacity: 0.5;
    }

    input.checked + .checkbox-inner {
      background-color: $defaultColor; 
    }

  }
</style>

<template>
  <div 
    :class="['component-checkbox', {['theme-' + theme]: !!theme}]" 
    :style="style.container"
  >
    <input 
      :class="{'checked': check}" 
      :style="style.input" 
      type="checkbox" 
      v-model="check" 
      :disabled="disabled"
    />
    <div class="checkbox-inner" :style="style.inner">
      <span class="check" :style="style.check"></span>
    </div>
  </div>
</template>

<script>

  /**
    체크박스 컴포넌트
  */
  export default {
    props: {
      /**
        체크박스 선택 상태 여부
      */
      checked: {
        type   : Boolean,
        default: false
      },

      /**
        체크박스 비활성화 여부
      */
      disabled: {
        type   : Boolean,
        default: false
      },

      /**
        사용자 지정 테마. 
        .component-checkbox.theme-{테마이름} 과 같이 스타일시트에 클래스를 지정하고
        프로퍼티에는 theme: {테마이름} 과 같이 넣고 사용한다
      */
      theme: {
        type: String
      },
      
      /**
        체크박스 색상 (theme가 지정되어 있으면 무시된다)
      */
      color: {
        type   : String,
        default: "#2196F3"
      },

      /**
        체크박스 사이즈 (px, theme가 지정되어 있으면 무시된다)
      */
      size: {
        type   : Number,
        default: 22
      }
    },

    computed: {
      
      /**
        style 오브젝트
      */
      style () {

        if(!this.theme) {
          return {
            container: {
              width :  `${this.size}px`,
              height:  `${this.size}px`
            },

            input: {
              width :  `${this.size}px`,
              height:  `${this.size}px`
            },

            inner: {
              borderColor: this.color,
              backgroundColor: (() => {
                if(this.checked) {
                  return this.color;
                }
              })()
            },

            check: {
              height: `${this.size - 10}px`,
              left  : `${(this.size / 2) - 4}px`
            }
          }
        } else {
          return {}
        }
      },

      check: {
        get () {
          return this.checked
        },
        set (value) {
          /**
            채크박스 토글 이벤트
            value true : 체크박스 활성화 false: 체크박스 비활성화
          */
          this.$emit("change", value);
        }
      }
    }
  }

</script>