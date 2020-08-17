// 概念: 使得各对象不用显式地相互引用,将对象与对象之间紧密的耦合关系变得松散,从而
// 可以独立地改变他们,核心是多个对象之间复杂交互的封装
// 组成: 
//  -1.Colleague: 同事对象,只知道中介者而不知道其他同事对象,通过中介者来与其他同事
// 对象通信
//  -2.Mediator: 中介者,负责与各同事对象的通信

// 使用场景:
//  -多个对象之间的引用关系变成了网状结构时,可以考虑引入中介者模式来把网状结构转化为
// 星型结构

// 中介者
class PlayerDirector {
  constructor() {
    // 保存所有玩家
    this.players = {}
  }
  addPlayer(player) {
    const { teamColor } = player;
    // 如果该颜色的玩家没有成立队伍,则新成立一个队伍
    this.players[teamColor] = this.players[teamColor] || [];
    // 添加玩家进队
    this.players[teamColor].push(player);
    return this;
  }
  playerDead({ teamColor }) {
    const teamPlayers = this.players[teamColor];
    const res = teamPlayers.every(item => {
      return item.state === 'dead';
    });
    if (res) {
      teamPlayers.forEach(item => {
        item.lose();
      });
      Object.keys(this.players).forEach(color => {
        if (color !== teamColor) {
          const teamPlayers = this.players[color];
          teamPlayers.forEach(item => {
            item.win();
          })
        }
      })
    }
  }
}
const playerDirector = new PlayerDirector();

// 每个玩家
class Player {
  constructor(name, teamColor) {
    this.name = name;
    this.teamColor = teamColor;
    // 玩家状态
    this.state = 'alive';
  }
  win() {
    console.log(this.name + '--won');
  }
  lose() {
    console.log(this.name + '--lose');
  }
  die() {
    this.state = 'dead';
    // 给中介者发送消息,玩家死亡, 当一个队伍中所有玩家都死亡,则另一个队伍获胜
    playerDirector.playerDead(this);
  }
}

const player1 = new Player( 'zhangsan', 'red' ),
      player2 = new Player( 'lisi', 'red' ),
      player3 = new Player( 'wangwu', 'blue' ),
      player4 = new Player( 'xiaoba', 'blue' );

playerDirector.addPlayer(player1)
.addPlayer(player2)
.addPlayer(player3)
.addPlayer(player4);

player1.die();
player3.die();
player4.die();