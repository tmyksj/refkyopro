# AtCoder Beginner Contest 027
## B - 島と橋
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int a_sum = 0;
    for (int i = 0; i < n; i++) {
        a_sum += a[i];
    }

    int res = -1;
    if (a_sum % n == 0) {
        res = 0;
        for (int i = 0, j = 0, k = -1; i < n; i++, res++) {
            j += a[i];
            if (j == (i - k) * a_sum / n) {
                j = 0;
                k = i;
                res--;
            }
        }
    }

    cout << res << endl;
}
```
