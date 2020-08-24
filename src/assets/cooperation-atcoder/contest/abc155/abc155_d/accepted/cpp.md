# AtCoder Beginner Contest 155
## D - Pairs
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> m_asc(0), p_asc(0);
    for (int i = 0; i < n; i++) {
        if (a[i] < 0) {
            m_asc.push_back(a[i]);
        } else if (a[i] > 0) {
            p_asc.push_back(a[i]);
        }
    }

    sort(m_asc.begin(), m_asc.end());
    sort(p_asc.begin(), p_asc.end());

    vector<long long> m_desc(m_asc), p_desc(p_asc);
    reverse(m_desc.begin(), m_desc.end());
    reverse(p_desc.begin(), p_desc.end());

    long long m_size = m_asc.size();
    long long p_size = p_asc.size();
    long long z_size = n - m_size - p_size;

    long long left = -(1LL << 61), right = 1LL << 61;
    while (left < right) {
        long long mid = (left + right) / 2;
        if (left + right < 0) {
            mid = (left + right - 1) / 2;
        }

        long long m_cnt_rev = 0;
        for (int i = 0, j = -1; i < m_size; i++) {
            while (j < p_size - 1 && m_desc[i] * p_desc[j + 1] < mid) {
                j++;
            }
            m_cnt_rev += j + 1;
        }
        long long m_cnt = m_size * p_size - m_cnt_rev;

        long long z_cnt = 0;
        if (mid <= 0) {
            z_cnt = z_size * (m_size + p_size) + z_size * (z_size - 1) / 2;
        }

        long long p_cnt = 0;
        for (int i = 0, j = -1; i < m_size; i++) {
            while (j < m_size - 1 && m_desc[i] * m_asc[j + 1] >= mid) {
                j++;
            }
            if (m_desc[i] * m_desc[i] >= mid) {
                p_cnt--;
            }
            p_cnt += j + 1;
        }
        for (int i = 0, j = -1; i < p_size; i++) {
            while (j < p_size - 1 && p_asc[i] * p_desc[j + 1] >= mid) {
                j++;
            }
            if (p_asc[i] * p_asc[i] >= mid) {
                p_cnt--;
            }
            p_cnt += j + 1;
        }
        p_cnt /= 2;

        if (n * (n - 1) / 2 - (m_cnt + z_cnt + p_cnt) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    cout << left - 1 << endl;
}
```
