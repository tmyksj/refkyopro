# AtCoder Beginner Contest 180
## C - Cream puff
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n;
    cin >> n;

    vector<long long> a(0), b(0);
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            a.push_back(i);
            b.push_back(n / i);
        }
    }

    reverse(b.begin(), b.end());

    for (int i = 0; i < static_cast<int>(a.size()); i++) {
        cout << a[i] << endl;
    }
    for (int i = (a[a.size() - 1] == b[0] ? 1 : 0); i < static_cast<int>(b.size()); i++) {
        cout << b[i] << endl;
    }
}
```
