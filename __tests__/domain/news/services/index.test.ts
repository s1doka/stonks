import { truncateNewsDescription } from '../../../../src/domain/news/services'

describe('News Service', () => {
  test('should truncate news description', () => {
    let lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna massa. Sed consectetur elit mauris, vitae malesuada lacus venenatis ut. Donec nec nulla vel massa tincidunt venenatis. Donec pretium elit et lectus accumsan, id suscipit mi sagittis. Maecenas non elit at ligula cursus posuere sit amet eget leo. Fusce sagittis ac leo at porttitor. Curabitur fringilla velit vel odio pulvinar pretium. Suspendisse non gravida ante, ac facilisis tortor. Sed interdum auctor varius. Praesent vitae feugiat leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
    let text = truncateNewsDescription(lorem)

    expect(text).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna massa. Sed consectetur elit mauris, vitae malesuada lacus venenatis ut. Donec nec nulla vel mass...'
    )
  })
})
