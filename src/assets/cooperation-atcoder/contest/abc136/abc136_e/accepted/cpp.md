# AtCoder Beginner Contest 136
## E - Max GCD
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int a_sum = 0;
    for (int i = 0; i < n; i++) {
        a_sum += a[i];
    }

    vector<int> div(0);
    for (int i = 1; 1LL * i * i <= a_sum; i++) {
        if (a_sum % i == 0) {
            div.push_back(i);
            div.push_back(a_sum / i);
        }
    }

    sort(div.begin(), div.end());

    int res = 0;
    for (int i = 0; i < static_cast<int>(div.size()); i++) {
        vector<int> a_mod(n);
        for (int j = 0; j < n; j++) {
            a_mod[j] = a[j] % div[i];
        }

        sort(a_mod.begin(), a_mod.end());

        vector<int> a_mod_sum_fwd(n), a_mod_sum_rev(n);
        for (int j = 0; j < n; j++) {
            a_mod_sum_fwd[j] = a_mod[j];
            a_mod_sum_rev[j] = div[i] - a_mod[j];
        }

        for (int j = 1; j < n; j++) {
            a_mod_sum_fwd[j] += a_mod_sum_fwd[j - 1];
        }

        for (int j = n - 2; j >= 0; j--) {
            a_mod_sum_rev[j] += a_mod_sum_rev[j + 1];
        }

        for (int j = 0; j < n - 1; j++) {
            if (a_mod_sum_fwd[j] % div[i] == a_mod_sum_rev[j + 1] % div[i]
                    && max(a_mod_sum_fwd[j], a_mod_sum_rev[j + 1]) <= k) {
                res = div[i];
            }
        }
    }

    cout << res << endl;
}
```
