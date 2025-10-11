import { test, expect } from '@playwright/test';

const URL = 'https://reqres.in/api'

test('GET- List Users', async ({ request }) => {
    const response = await request.get(`${URL}/users?page=2`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('byron')
    console.log(await response.json())
})

test('GET- Single User', async ({ request }) => {
    const response = await request.get(`${URL}/users/2`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Janet')
    console.log(await response.json())
})

test('POST- Create User', async ({ request }) => {
    const response = await request.post(`${URL}/users`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        },
        data: {
            "name": "Bonnie",
            "job": "hunter"
        }
    })

    expect(response.status()).toBe(201)
    const text = await response.text()
    expect(text).toContain('Bonnie')
    console.log(await response.json())
})

test('PUT- Update User', async ({ request }) => {
    const response = await request.put(`${URL}/users/2`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        },
        data: {
            "name": "Bonnie",
            "job": "Pseudo QA"
        }
    })

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Bonnie')
    expect(text).toContain('Pseudo QA')
    console.log(await response.json())
})

test('PATCH- Update User Partially', async ({ request }) => {
    const response = await request.patch(`${URL}/users/2`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        },
        data: {
            "name": "Bony"
        }
    })

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Bony')
    console.log(await response.json())
})

test('DELETE- Remove User', async ({ request }) => {
    const response = await request.delete(`${URL}/users/2`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })

    expect(response.status()).toBe(204)
})