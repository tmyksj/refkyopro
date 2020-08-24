# AtCoder Beginner Contest 135
## C - City Savers
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n + 1);
    for (int i = 0; i < n + 1; i++) {
        cin >> a[i];
    }

    vector<long long> b(n);
    for (int i = 0; i < n; i++) {
        cin >> b[i];
    }

    long long sum = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] < b[i]) {
            sum += a[i];

            if (a[i + 1] < b[i] - a[i]) {
                sum += a[i + 1];
                a[i + 1] = 0;
            } else {
                sum += b[i] - a[i];
                a[i + 1] -= b[i] - a[i];
            }
        } else {
            sum += b[i];
        }
    }

    cout << sum << endl;
}
```
