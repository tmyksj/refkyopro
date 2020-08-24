# AtCoder Beginner Contest 127
## F - Absolute Minima
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int q;
    cin >> q;

    multiset<long long> left, right;
    long long a_sum = 0, b_sum = 0;

    for (int i = 0; i < q; i++) {
        int r;
        cin >> r;

        if (r == 1) {
            long long a, b;
            cin >> a >> b;

            if (i == 0 || (*left.rbegin() <= a && a <= *right.begin())) {
                left.insert(a);
                right.insert(a);
            } else if (a < *left.rbegin()) {
                a_sum += *left.rbegin() - a;
                left.insert(a);
                left.insert(a);
                right.insert(*left.rbegin());
                left.erase((++left.rbegin()).base());
            } else {
                a_sum += a - *right.begin();
                right.insert(a);
                right.insert(a);
                left.insert(*right.begin());
                right.erase(right.begin());
            }

            b_sum += b;
        } else {
            cout << *left.rbegin() << " " << a_sum + b_sum << endl;
        }
    }
}
```
