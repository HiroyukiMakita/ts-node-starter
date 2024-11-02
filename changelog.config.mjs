module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'ビルド関連や補助ツールの変更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の変更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの更新',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '機能の追加、変更、削除（セマンティックバージョニングのマイナー以上）',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正（セマンティックバージョニングのパッチ相当）',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンス改善',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'リファクタリング',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'リリースコミット',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'フォーマッティングなどのコードのスタイル調整',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストコードの変更',
      emoji: '💍',
      value: 'test',
    },
  },
  messages: {
    type: 'コミットする変更の種類を選択してください:',
    scopes: 'このコンポーネントが影響するスコープを選択してください:\n',
    subject: '変更について、命令口調で短い説明を書いてください:\n',
    body: '変更点に関するより長い説明を記述してください:\n',
    breaking: '変更点があればリストアップする:',
    issues: 'このコミットがクローズする issue（例：#123）:',
    confirmCommit: 'このコミットが影響を与えたパッケージ\n',
  },
};
