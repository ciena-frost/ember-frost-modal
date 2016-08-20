import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: [
    'isAboutVisible',
  ],

  isAboutVisible: false,
  legalIpsum: `
    For these purposes, complete source code must retain the above copyright notice,
    this list of conditions and the like. While this license is intended to facilitate
    the commercial use of Licensed Product directly or indirectly, out of the Program
    by all those who receive copies directly or indirectly infringes any patent, then
    any patent licenses granted under this Agreement, including one that receives the
    Licensed Product as an Executable version available; and if a few lines of code are
    reused for a particular Source Code and all other entities that control, are controlled
    by, or is derived from this Software without specific prior written permission. THIS
    SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED
    WARRANTIES, INCLUDING, BUT NOT LIMITED TO; PROCUREMENT OF SUBSTITUTE GOODS OR SERVICE;
    DAMAGES ARISING OUT OF THE PROGRAM "AS IS" AND ANY EXPRESS OR IMPLIED INCLUDING, WITHOUT
    LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR
    FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT NOT
    PROHIBITED BY LAW, IN NO EVENT SHALL THE PHP DEVELOPMENT TEAM OR ITS CONTRIBUTORS BE
    LIABLE TO ANY PERSON FOR ANY PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT UNLESS
    REQUIRED BY APPLICABLE LAW PROHIBITS SUCH LIMITATION.
  `
})
