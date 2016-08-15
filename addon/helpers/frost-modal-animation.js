import Ember from 'ember'
const {
  Helper
} = Ember

const form = function() {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', { maxOpacity: 0.5 }]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-down', { duration: 300 }]
    }),
    this.reverse('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', { maxOpacity: 0.5 }]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-up', { duration: 300 }]
    })
  )
}

const message = function() {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', { duration: 300, maxOpacity: 0.7 }]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-down', { duration: 300 }]
    }),
    // @include keyframes(modalComeIn) {
    //     0% {
    //         visibility: hidden;
    //         opacity: 0;
    //         @include transform(scale(.8, .8));
    //     }
    //     65.5% {
    //         @include transform(scale(1.03, 1.03));
    //     }
    //     100% {
    //         visibility: visible;
    //         opacity: 1;
    //         @include transform(scale(1, 1));
    //     }
    // }
    this.reverse('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', { duration: 300, maxOpacity: 0.0 }]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-up', { duration: 300 }]
    })
    // @include keyframes(modalHeadOut) {
    //     0% {
    //         visibility: visible;
    //         opacity: 1;
    //         @include transform(translateY(0) scale(1, 1));
    //     }
    //     100% {
    //         visibility: hidden;
    //         opacity: 0;
    //         @include transform(translateY(35px) scale(.97, .97));
    //     }
    // }
  )

//   @import "compass/css3";

// * { box-sizing: border-box; }
// html, body {
//   width: 100%; height: 100%;
//   position: relative;
//   margin: 0; padding: 0;
//   font-family: 'Noto Sans', sans-serif;
//   font-weight: 400;
//   font-size: 16px; line-height: 22px;
//   background-color: #F2E1AC;
// }

// .fancy-btn {
//   -webkit-appearance: none;
//   cursor: pointer; outline: none; border: none;
//   position: relative; top: 50%;
//   display: block; min-width: 10%;
//   line-height: 55px; font-size: 14px;
//   text-transform: uppercase;
//   margin: 0 auto; padding: 0 10px;
//   background-color: #F2594B;
//   color: #FFF;
//   border-radius: 3px;
//   @include transform(translateY(-50%));
//   &:hover {
//     background-color: lighten(#F2594B, 5%);
//   }
// }

// // completely redoing the modal from the ground up.
// .modal-overlay {
//     position: absolute;
//     top: 0; left: 0; right: 0; bottom: 0;
//     margin: auto;
//     background-color: #fff;
//     opacity: 0;
//     visibility: hidden;
//     z-index: 40;

//     @include transition(opacity .25s ease 0s, visibility linear .35s);
//     &.state-show {
//         opacity: .7;
//         visibility: visible;
//         @include transition-delay(0s);
//         @include transition-duration(.2s, 0s);
//     }
// }

// .modal-frame {
//     position: absolute;
//     top: 0; left: 0; right: 0; bottom: 0;
//     margin: auto;
//     z-index: 50;

// /*     display: table; */
//     @include display-flex;
//     @include align-items(center);
//     -moz-box-align: center;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     justify-content: center;
//     -moz-box-pack: center;
//     -ms-flex-pack: center;

//     width: 100%;
//     text-align: center;
//     visibility: hidden;

//     // animation classes and behavior
//     &.state-appear {
//         visibility: visible;
//         .modal-inset {
//             @include animation(modalComeIn .25s ease);
//             visibility: visible; /* to keep @ final state */
//         }
//         .modal-body {
//             opacity: 1;
//             @include transform(translateY(0) scale(1,1))
//         }
//     }
//     &.state-leave {
//         visibility: visible;
//         .modal-inset {
//             @include animation(modalHeadOut .35s ease .1s);
//             visibility: visible;
//         }
//         .modal-body {
//             opacity: 0;
//             @include transition-delay(0s);
//             @include transition-duration(.35s);
//             @include transition-timing-function(ease);
//             @include transform(translateY(25px))
//         }
//     }
// }
// @-moz-document url-prefix() {
//     .modal-frame {
//         height: calc(100% - 55px);
//     }
// }

// .modal {
//     display: block;
//     vertical-align: middle;
//     text-align: center;
// }
//     .modal-inset {
//         position: relative;
//         padding: 60px;
//         background-color: white;
//         min-width: 320px;
//         min-height: 126px;
//         margin: auto;
//         visibility: hidden;
//         @include box-shadow(2px 2px 8px 1px rgba(0,0,0,.2));
//         @include backface-visibility(hidden); // helps render animation
//         @include transform(translate3d(0,0,0)); // helps render animation
//         @include transform-style(preserve-3d); // helps render animation
//         .close {
//             display: block;
//             cursor: pointer;
//             position: absolute;
//             top: 10px;
//             right: 10px;
//             padding: 10px;
//             opacity: .4;
//             &:hover {
//               opacity: 1;
//             }
//         }
//     }
//         .modal-body {
//             margin: auto;
//             opacity: 0;
//             @include transform(translateY(0) scale(.8, .8));
//             @include transition-property(opacity, transform);
//             @include transition-duration(.25s);
//             @include transition-delay(.1s);
//             h3 {
//               font-weight: 700;
//               padding-bottom: 22px;
//               display: block;
//               color: #F2594B;
//               text-align: center;
//             }
//             p {
//               padding-bottom: 20px;
//             }
//             .ps {
//               font-size: 12px;
//               opacity: .3;
//             }
//         }
}

/**
 * Predefined animations for various types of Frost modals
 */
export function frostModalFormAnimation([type]) {
  switch (type) {
    case 'form':
      return form
    case 'message':
      return message
    default:
      break
  }
}

export default Helper.helper(frostModalFormAnimation)

export { form, message }
