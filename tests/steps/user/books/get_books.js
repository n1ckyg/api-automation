import { request } from '../../utils/requests.js'

export async function getBooks() {
    it('Retrieve List of All Books', async function () {
        await request(this, 'GET', '/books', undefined, false, 
            {
                statusCode : 200,
                expectedFields: ['0.id'],
                expectedValues: [
                                    {path: '0.id', value: 1},
                                ]
            }
        )
    })
}