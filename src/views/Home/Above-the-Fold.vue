<template>
  <section class="above-the-fold" id="token-sale-section">
    <!-- <video src="https://giphy.com/embed/3oKIPaPc7NBFYWveIU" class="above-the-fold__video" autoplay="true" loop="true"></video> -->
    <!-- <iframe src="https://giphy.com/embed/3oKIPaPc7NBFYWveIU" frameBorder="0" class="above-the-fold__video"></iframe> -->
    <!-- <div class="above-the-fold__video__overlay"></div> -->
    <!-- <iframe src="https://giphy.com/embed/3ohzdRQ2tYnxrR45Xi" width="1000" height="800" frameBorder="0" class="above-the-fold__video" ></iframe> -->
    <!-- <iframe height="500" width="700" class="above-the-fold__video" src="../../assets/images/backgrounds/calcflow.gif"></iframe> -->
    <div class="token-sale content-container content-container--large ">
      <div class="token-sale__text content-container--medium text-color--white">
        <h1 class="font-size--large uppercase text-center">
          <span v-if=" language === 'ru' " style="font-size: 34px;">
            ПРИСОЕДИНЯЙТЕСЬ  <br/> К НАШЕЙ ПРОДАЖЕ <br/>ТОКЕНОВ
          </span>
          <span v-else-if=" language === 'ch' ">参与我们的代币销售</span>
          <span v-else-if=" language === 'ge' ">
            NEHMEN SIE AN UNSEREM TOKEN-VERKAUF TEIL
          </span>
          <span v-else-if=" language === 'ja' ">当社のトークンセールに参加</span>
          <span v-else-if=" language === 'ko' ">저희 토큰 판매에 참여하세요</span>
          <span v-else>Join Our Token Sale</span>
        </h1>

        <div>
          <h4 class="uppercase text-center text-color--matryx-blue" style="margin-bottom: -10px; margin-top: 20px;">
            <span v-if=" language === 'ch' ">距结束时间</span>
            <span v-else>
              <span v-if="is10">10% Bonus Ends in:</span>
              <span v-else-if="is5">5% Bonus Ends in:</span>
              <span v-else>Ends In:</span>
            </span>
          </h4>

          <Countdown :end="endDate" style="margin-top: 0px;"></Countdown>

          <p class="text-center text-color--matryx-blue">
            <span v-if=" language === 'ch' ">我们感谢大家的参与，点击查看我们的
            <a class="link" href="https://matryx.ai/matryx-token-sale-extension-cn.pdf" target="_blank"> 最新消息</a></span>
            <span v-else>
            We appreciate everyone’s support so far
            <br/> and have some
            <a class="link"
              href="https://blog.matryx.ai/token-sale-update-changing-it-up-5f83de13a76d"
              target="_blank"
            >
              exciting news!</a>
              </span>
          </p>

          <Matryx-Btn :text="buttonText" :handleClick="openSaleModal">
          </Matryx-Btn>

          <p class="text-center text-color--matryx-blue">
            <span v-if=" language === 'ch' ">已经拥有MTX了吗？<span class="link" @click="openMTXModal">检查您的余额</span></span>
            <span v-else>Already purchased MTX? <span class="link" @click="openMTXModal">Check your balance.</span></span>
          </p>

          <Eth-Bought></Eth-Bought>
        </div>
      </div>

      <div class="token-sale__video-launcher content-container--medium">
        <iframe class="matryx-video-yt"
          width="560" height="315"
          :src="selectedLanguage" frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </section>
</template>

<script>
import Countdown from '@/components/Countdown'
import GetNotified from '@/components/Get-Notified'
import Video from '../../assets/media/giphy.mp4'
import MatryxBtn from '@/components/Matryx-Btn'
import EthBought from '@/components/Eth-Bought'

export default {
  name: 'AboveTheFold',

  components: {
    Countdown,
    GetNotified,
    MatryxBtn,
    EthBought
  },

  computed: {
    language () {
      return this.$store.state.language
    },

    selectedLanguage () {
      return this.language === 'ch' ? this.VideoLinks.Chinese : this.VideoLinks.English
    },

    buttonText () {
      return this.language === 'ch' ? '购买MTX' : 'Purchase MTX'
    },

    endDate () {
      const end10 = 'October 13 2017 15:00:00 UTC'
      const end5 = 'October 31 2017 15:00:00 UTC'
      const endSale = 'November 15 2017 15:00:00 UTC'
      const today = new Date()

      if (today.getTime() > new Date(endSale).getTime()) {
        this.is5 = false
        this.is10 = false
        return today
      }

      if (today.getTime() > new Date(end5).getTime()) {
        this.is5 = false
        this.is10 = false
        return endSale
      }

      if (today.getTime() > new Date(end10).getTime()) {
        this.is5 = true
        this.is10 = false
        return end5
      }

      this.is10 = true
      this.is5 = false
      return end10
    }
  },

  data () {
    return {
      Video,
      VideoLinks: {
        English: 'https://www.youtube.com/embed/iLHlwnaqTWw?rel=0&amp;showinfo=0',
        Chinese: 'http://player.youku.com/embed/XMzA0NzY0NzM4NA=='
      },
      totalSold: 2600,
      is5: false,
      is10: false
    }
  },

  methods: {
    goToPreSale () {
      this.$router.push({ name: 'PreSale' })
    },
    openSaleModal () {
      this.$store.commit('showSaleModal', true)
    },
    openMTXModal () {
      this.$store.commit('showCheckMTXModal', true)
    }
  }
}
</script>

<style lang="scss" >
@import '../../assets/css/colors.scss';

iframe{
  width: 560px !important;
}

section.above-the-fold {
  margin-bottom: 0px;
  margin-top:0;
  position:relative;
  padding-top: 200px;
  padding-bottom: 250px;

  & > .content-container {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 1;
    position:relative;
  }

  .matryx-button {
    background-color: $light-green;
    border-color: $light-green;
    margin: -5px auto 10px;
    height: 70px;
    &:hover {
      background-color: $matryx-blue;
      border-color: $white;
    }
  }

  .link {
    text-decoration: underline;

    &:hover {
      color: $white;
      cursor: pointer;
    }
  }

  .token-sale__progress {
    min-width: 300px;
    width: 100%;
  }
}

.token-sale__text {
  margin: 0px auto;

  p.lead {
    border-left: 4px solid $matryx-blue;
    padding-left: 20px;
    font-size: 16px;
    max-width: 350px;
    opacity: 0.8;
    margin: 20px auto 0px;
  }
}

.above-the-fold {
  border-radius: 0;
  // background: url('../../assets/images/backgrounds/abovethefoldbkg.svg');
  background-image: url('../../assets/images/backgrounds/abovethefoldbkg.svg');
  // background-color: #082C49;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 0;
  background-position-y: initial;
}

iframe.above-the-fold__video {
  position: absolute;
  z-index: 1;
  min-width:500px !important;
}

// .above-the-fold__video__overlay {
//   position: absolute;
//   background-color: #000;
//   opacity: 0.7;
//   z-index:1;
// }

// .above-the-fold__video__overlay,
// .above-the-fold__video {
//   height: 100% !important;
//   width: 100% !important;
// }


.token-sale__video-launcher button {
  padding: 0;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 20px #aeaeae, -2px -2px 20px #aeaeae;

  &:hover, &:active, &:focus {
    box-shadow: 3px 3px 30px #aeaeae, -3px -3px 30px #aeaeae;

  }
}


/*video modal*/
.above-the-fold{

  .modal-dialog {
    max-width: 900px;
  }
  .modal-content{
    background-color: transparent;
    border:none;
  }
  .modal-header {
    border-bottom: none;
    padding:0;
  }
  .modal-body {
    padding:0;

    video {
      width: 100%;
    }
  }
  .modal-footer {
    display:none;
  }
  .close, .close:focus {
    color: #fff;
    text-shadow: 0 1px 0 #000;
    opacity: 0.7;
    outline: none;
  }
  .close:hover {
    color: #fff;
    text-shadow: 0 1px 0 #000;
    opacity:1;
  }
}


#getNotified{
  .modal-footer {
    display:none;
  }
  .modal-header {
    border-bottom: none;
    padding:0;
  }
  .modal-dialog{
    background-color: #fff;
    border-radius:10px;

    .close{
      right: 10px;
      position: relative;
      padding: 10px;
    }
    .close, .close:focus {
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.7;
      outline: none;
    }
    .close:hover {
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity:1;
    }

    .content-container {
      padding: 0 40px 20px;
    }

    .cta__form__email {
      border: 1px solid $matryx-dark-grey;
      border-right: none;

      &::placeholder {
        color: $matryx-dark-grey;
      }
    }
  }
}



.tokensale-background {
  position:absolute;
  min-height:100%;
  min-width:100%;
  top:0;
  left:0;
  z-index: 1;
}

.purple-btn {
  border: none;
}


/*----- MEDIA QUERIES -----*/

// @media screen and (min-width: 1690px) {
//   section.above-the-fold {
//     padding-top: 200px;
//     padding-bottom: 300px;
//   }
// }

// @media screen and (max-width: 1500px) {
//   section.above-the-fold {
//     max-height: 800px;
//   }
// }

@media screen and (min-width: 1700px) {
  section.above-the-fold {
    padding-top: 250px;
    padding-bottom: 300px;
    max-height: 1000px;
  }
}

@media screen and (max-width: 1050px) {
  section.above-the-fold {
    & > .content-container {
      padding-top: 200px;
    }
  }
  .token-sale {
    flex-direction: column;
  }
  .token-sale__text,
  .token-sale__video-launcher {
    width: 100%;
    margin: 20px 0;
    max-width: 100%;
    text-align:center;

  }

  .token-sale__text p.lead {
    margin: 20px auto;
    width: 100%;
    max-width: 560px;

  }

}

@media screen and (max-width: 750px) {
  section.above-the-fold {
    & > .content-container {
      padding-top: 200px;
    }
  }

  iframe{
    width: 300px !important;
    height: 200px !important;
  }
}

@media screen and (max-width: 550px) {
  section.above-the-fold {

    & > .content-container {
      padding-top: 100px;
      // margin-bottom: 140px;
    }
  }
  #getNotified .modal-dialog .cta__form__email {
    border-right: 1px solid $purple;
  }
  .above-the-fold .cta .cta__form .cta__form__email {
    width: calc(100% - 20px);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  .above-the-fold .cta .cta__form .cta__form__submit {
    width: calc(100% - 20px);
    margin-top: 10px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
}

</style>
