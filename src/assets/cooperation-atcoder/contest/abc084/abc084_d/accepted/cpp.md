# AtCoder Beginner Contest 084
## D - 2017-like Number
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 100001;

    vector<bool> prime(n, true);
    prime[0] = prime[1] = false;
    for (int i = 2; i < n; i++) {
        if (prime[i]) {
            for (int j = 2 * i; j < n; j += i) {
                prime[j] = false;
            }
        }
    }

    vector<int> like(n, 0);
    for (int i = 2; i < n; i++) {
        like[i] += like[i - 1];
        if (prime[i] && prime[(i + 1) / 2]) {
            like[i]++;
        }
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        cout << like[r] - like[l - 1] << endl;
    }
}
```
