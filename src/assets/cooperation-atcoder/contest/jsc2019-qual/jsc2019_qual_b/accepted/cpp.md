# 第一回日本最強プログラマー学生選手権-予選-
## B - Kleene Inversion
```cpp
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

    vector<long long> cnt_a(n, 0), cnt_s(n, 0);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i] > a[j]) {
                cnt_a[i]++;
                if (i < j) {
                    cnt_s[i]++;
                }
            }
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        res += ((k * (k - 1) / 2) % 1000000007) * cnt_a[i];
        res %= 1000000007;
        res += k * cnt_s[i];
        res %= 1000000007;
    }

    cout << res << endl;
}
```
